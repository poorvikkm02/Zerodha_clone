import { useEffect, useRef } from 'react';
import Weather from './Weather';

const StockCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // --- Candlestick data (simulated, scrolling) ---
    const NUM_CANDLES = 40;
    const tickers = ['NIFTY 50', 'SENSEX', 'RELIANCE', 'INFY', 'TCS', 'HDFC', 'BAJFINANCE'];
    let candles = [];

    const randomCandle = (prev) => {
      const open = prev ? prev.close : 22000 + Math.random() * 500;
      const change = (Math.random() - 0.48) * 120;
      const close = open + change;
      const high = Math.max(open, close) + Math.random() * 60;
      const low = Math.min(open, close) - Math.random() * 60;
      return { open, close, high, low };
    };

    for (let i = 0; i < NUM_CANDLES; i++) {
      candles.push(randomCandle(candles[i - 1]));
    }

    // --- Floating ticker labels ---
    const floats = tickers.map((name, i) => ({
      name,
      value: (Math.random() * 5000 + 500).toFixed(2),
      change: ((Math.random() - 0.45) * 3).toFixed(2),
      x: (canvas.width / tickers.length) * i + 60,
      y: 30 + Math.random() * 60,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    let offset = 0; // scroll offset for candles

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      // Transparent background — no fill, canvas shows through to page bg

      // --- Subtle grid lines ---
      ctx.strokeStyle = 'rgba(0,0,0,0.05)';
      ctx.lineWidth = 1;
      for (let y = 0; y < H; y += 40) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }
      for (let x = 0; x < W; x += 60) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }

      // --- Candlestick chart ---
      const chartH = H * 0.55;
      const chartY = H * 0.25;
      const candleW = Math.max(8, W / NUM_CANDLES - 3);
      const spacing = W / NUM_CANDLES;

      const allPrices = candles.flatMap(c => [c.high, c.low]);
      const minP = Math.min(...allPrices);
      const maxP = Math.max(...allPrices);
      const priceRange = maxP - minP || 1;

      const toY = (price) => chartY + chartH - ((price - minP) / priceRange) * chartH;

      candles.forEach((c, i) => {
        const x = i * spacing + (offset % spacing) - spacing;
        if (x < -spacing || x > W + spacing) return;

        const isGreen = c.close >= c.open;
        const color = isGreen ? '#00a152' : '#d32f2f';
        const openY = toY(c.open);
        const closeY = toY(c.close);
        const highY = toY(c.high);
        const lowY = toY(c.low);
        const bodyTop = Math.min(openY, closeY);
        const bodyH = Math.max(Math.abs(closeY - openY), 2);

        // Wick
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x + candleW / 2, highY);
        ctx.lineTo(x + candleW / 2, lowY);
        ctx.stroke();

        // Body
        ctx.fillStyle = isGreen ? 'rgba(0,161,82,0.8)' : 'rgba(211,47,47,0.8)';
        ctx.fillRect(x, bodyTop, candleW, bodyH);

        // Subtle glow
        ctx.shadowColor = color;
        ctx.shadowBlur = 4;
        ctx.fillRect(x, bodyTop, candleW, bodyH);
        ctx.shadowBlur = 0;
      });

      // --- Line overlay (moving average style) ---
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(30, 100, 220, 0.55)';
      ctx.lineWidth = 2;
      candles.forEach((c, i) => {
        const x = i * spacing + candleW / 2 + (offset % spacing) - spacing;
        const y = toY((c.open + c.close) / 2);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.stroke();

      // --- Floating ticker labels ---
      floats.forEach(t => {
        t.y += t.vy;
        if (t.y < 20 || t.y > H * 0.22) t.vy *= -1;

        const isPos = parseFloat(t.change) >= 0;
        const textC = isPos ? '#00a152' : '#d32f2f';

        // Pill background
        ctx.fillStyle = 'rgba(255,255,255,0.75)';
        ctx.strokeStyle = 'rgba(0,0,0,0.08)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(t.x - 50, t.y - 18, 110, 38, 8);
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 11px Inter, sans-serif';
        ctx.fillStyle = 'rgba(30,30,30,0.9)';
        ctx.fillText(t.name, t.x - 44, t.y - 3);

        ctx.font = '10px Inter, sans-serif';
        ctx.fillStyle = textC;
        ctx.fillText(`${isPos ? '▲' : '▼'} ${t.change}%`, t.x - 44, t.y + 12);
      });

      // Scroll candles
      offset += 0.4;
      if (offset >= spacing) {
        offset = 0;
        candles.shift();
        candles.push(randomCandle(candles[candles.length - 1]));
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '320px',
        display: 'block',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    />
  );
};

const Body = () => {
  return (
    <div className="body">
      <StockCanvas />
      <div className="image_section">
        <img className="data" src="https://zerodha.com/static/images/landing.svg" alt="DataPage" />
        <div className="text">
          <h1>Invest in everything</h1>
          <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more</p>
          <button>Sign up now</button>
        </div>
      </div>
      <div className="section2">
        <div className="section_container">
          <div className="section_text">
            <h2>Trust with confidence</h2>
            <h3>Customer-first always</h3>
            <p>That's why 1.6+ crore customers trust Zerodha with <span style={{color:"#1a73e8", fontWeight:"500"}}>~ ₹6 lakh crores</span> of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
            <h3>No spam or gimmicks</h3>
            <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies of equity investments, making us India's largest broker; contributing to <span style={{color:"#1a73e8", fontWeight:"500"}}>15% of daily retail exchange volumes</span> in India.</p>
            <h3>Low, transparent pricing</h3>
            <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
            <h3>The Zerodha universe</h3>
            <p>Not just an app, but a whole ecosystem. Our <span style={{color:"#1a73e8", fontWeight:"500"}}>investments in 30+ fintech startups</span> offer you tailored services specific to your needs.</p>
          </div>
          <div className="circle"><img className="ecosystem" src="https://zerodha.com/static/images/ecosystem.png" alt="ecosystem" />
          <div className="products"><p><a href="#">Explore our products</a></p>
          <p><a href="#">Try Kite demo </a></p></div></div>
        </div>
      </div>
      <div className="kite">
        <div><img src="https://zerodha.com/static/images/kc-logo-landing.svg" alt="Kite" /></div>
        <div>
          <h2>Need more? Build your own trading and investing experience with Kite Connect,<br/>simple HTTP APIs to place orders, stream market data, manage your account, and more. <a href="#" style={{color:"#387ed1", fontWeight:"500", textDecoration:"none"}}>Explore</a></h2>
        </div>
        <div><img src="https://zerodha.com/static/images/kc-banner-image.svg" alt="banner" /></div>
      </div>
    </div>
  );
};

export default Body;