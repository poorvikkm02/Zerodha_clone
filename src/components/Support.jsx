import { useState } from "react";

const supportTopics = [
  {
    category: "Account Opening",
    icon: "📋",
    items: [
      "How to open an account?",
      "Documents required",
      "NRI account opening",
      "HUF account opening",
      "Minor account opening",
      "Corporate account opening",
    ],
  },
  {
    category: "Your Account",
    icon: "👤",
    items: [
      "Login credentials",
      "Update personal details",
      "Nominee addition/change",
      "Segment activation",
      "Close your account",
      "Transfer & conversion of shares",
    ],
  },
  {
    category: "Trading & Markets",
    icon: "📈",
    items: [
      "Order types & placement",
      "Margins & leverage",
      "Corporate actions",
      "Contract notes",
      "Brokerage charges",
      "Market timings",
    ],
  },
  {
    category: "Funds",
    icon: "💰",
    items: [
      "Add funds to your account",
      "Withdraw funds",
      "UPI mandate",
      "Auto pay setup",
      "Payment failures",
      "Fund transfer charges",
    ],
  },
  {
    category: "Kite Platform",
    icon: "🪁",
    items: [
      "Getting started with Kite",
      "Charting & technical analysis",
      "Alerts & notifications",
      "Kite mobile app",
      "GTT orders",
      "Watchlist management",
    ],
  },
  {
    category: "Mutual Funds (Coin)",
    icon: "🪙",
    items: [
      "How to buy mutual funds?",
      "SIP setup & management",
      "Redeem mutual funds",
      "Switch between funds",
      "Coin charges",
      "Direct vs Regular funds",
    ],
  },
];

const faqs = [
  {
    question: "What are the charges for opening an account?",
    answer:
      "Account opening is completely free. There are no account opening charges, no AMC charges, and no charges for maintaining your Demat account. You only pay when you trade.",
  },
  {
    question: "What is the brokerage structure?",
    answer:
      "Zerodha charges ₹0 for equity delivery trades. For intraday and F&O trades, a flat fee of ₹20 per executed order or 0.03% (whichever is lower) is charged.",
  },
  {
    question: "How do I add funds to my trading account?",
    answer:
      "You can add funds via UPI, net banking, or NEFT/RTGS. Log in to Kite, click on 'Funds' and choose your preferred payment method. UPI transfers are instant.",
  },
  {
    question: "Is Zerodha safe and registered with SEBI?",
    answer:
      "Yes, Zerodha is registered with SEBI (INZ000031633), BSE (1070), NSE (13155), and is a depository participant of CDSL. We are India's largest broker with 1.6+ crore customers.",
  },
  {
    question: "How do I close my Zerodha account?",
    answer:
      "You can close your account by visiting Console > Account > Close Account. Make sure to withdraw all funds and sell any holdings before initiating closure.",
  },
];

const Support = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const filteredTopics = supportTopics
    .map((topic) => ({
      ...topic,
      items: topic.items.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((topic) => topic.items.length > 0);

  return (
    <div className="page-container">
      {/* Hero */}
      <section className="support-hero">
        <h1>Support Portal</h1>
        <p>Search for an answer or browse help topics below</p>
        <div className="support-search">
          <input
            type="text"
            placeholder="Search for help topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
        </div>
      </section>

      {/* Quick links */}
      <section className="support-quick-links">
        <div className="quick-link-grid">
          <a href="#" className="quick-link-card">
            <span className="quick-icon">📖</span>
            <span>Track Ticket</span>
          </a>
          <a href="#" className="quick-link-card">
            <span className="quick-icon">📝</span>
            <span>Create Ticket</span>
          </a>
          <a href="#" className="quick-link-card">
            <span className="quick-icon">📄</span>
            <span>Varsity</span>
          </a>
          <a href="#" className="quick-link-card">
            <span className="quick-icon">📢</span>
            <span>Bulletin</span>
          </a>
        </div>
      </section>

      {/* Topics */}
      <section className="support-topics">
        <h2>Help Topics</h2>
        <div className="topics-grid">
          {filteredTopics.map((topic, i) => (
            <div className="topic-card" key={i}>
              <h3>
                <span className="topic-icon">{topic.icon}</span>
                {topic.category}
              </h3>
              <ul>
                {topic.items.map((item, j) => (
                  <li key={j}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="support-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${openFaq === index ? "faq-item--open" : ""}`}
              key={index}
            >
              <button className="faq-question" onClick={() => toggleFaq(index)}>
                <span>{faq.question}</span>
                <span className="faq-toggle">
                  {openFaq === index ? "−" : "+"}
                </span>
              </button>
              {openFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Support;