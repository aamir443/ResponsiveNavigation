import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { 
    label: "Home", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
      </svg>
    ), 
    path: "/AgentSDesk" 
  },
  { 
    label: "Credit Cards", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
        <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
        <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
      </svg>
    ),
    path: "/credit-cards",
    dropdown: [
      { label: "Credit Card Offers", path: "/CreditCardOffers", icon: "🎁" },
      { label: "Apply for Credit Card", path: "/ApplyCreditCard", icon: "📝" },
      { label: "Card Statement", path: "/CardStatements", icon: "📊" },
      { label: "Reward Points", path: "/RewardPoints", icon: "⭐" }
    ]
  },
  { 
    label: "Insurance", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
        <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
      </svg>
    ),
    path: "/insurance",
    dropdown: [
      { label: "Health Insurance", path: "/HealthInsurance", icon: "🏥" },
      { label: "Life Insurance", path: "/LifeInsurance", icon: "🛡️" },
      { label: "Vehicle Insurance", path: "/insurance/vehicle", icon: "🚗" },
      { label: "Travel Insurance", path: "/insurance/travel", icon: "✈️" }
    ]
  },
  { 
    label: "Loan", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
        <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
        <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd" />
        <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
      </svg>
    ),
    path: "/loan",
    dropdown: [
      { label: "Personal Loan", path: "/loan/personal", icon: "💳" },
      { label: "Home Loan", path: "/HomeLoan", icon: "🏠" },
      { label: "Car Loan", path: "/loan/car", icon: "🚙" },
      { label: "Education Loan", path: "/EducationLoanPage", icon: "🎓" }
    ]
  },
  { 
    label: "Payments", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
        <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" clipRule="evenodd" />
      </svg>
    ),
    path: "/utility0",
     dropdown: [
      { label: "Mobile Recharge", path: "/MobileRecharge", icon: "💡" },
      { label: "Water Bill", path: "/utility-services/water", icon: "🚰" },
      { label: "Gas Bill", path: "/utility-services/gas", icon: "🔥" },
      { label: "Electricity Bill", path: "/utility-services/mobile", icon: "📱" },
      { label: "DTH Recharge", path: "/utility-services/dth", icon: "📺" },
      { label: "Broadband Bill", path: "/utility-services/broadband", icon: "🌐" }
    ]
  },
  { 
    label: "Mutual Funds", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
        <path fillRule="evenodd" d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" clipRule="evenodd" />
      </svg>
    ),
    path: "/mutual-funds",
    dropdown: [
      { label: "SIP Plans", path: "/mutual-funds/sip", icon: "📈" },
      { label: "Lump Sum Investment", path: "/mutual-funds/lump-sum", icon: "💰" },
      { label: "Fund Performance", path: "/mutual-funds/performance", icon: "📊" },
      { label: "Portfolio", path: "/mutual-funds/portfolio", icon: "📑" }
    ]
  },
  { 
    label: "Saving Account", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
        <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
        <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
      </svg>
    ),
    path: "/saving-account",
    dropdown: [
      { label: "Open New Account", path: "/saving-account/open", icon: "🆕" },
      { label: "Account Benefits", path: "/saving-account/benefits", icon: "✅" },
      { label: "Interest Rates", path: "/saving-account/rates", icon: "📉" },
      { label: "Account Services", path: "/saving-account/services", icon: "🔧" }
    ]
  },
  { 
    label: "Reports", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
        <path fillRule="evenodd" d="M3 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5H15v-18a.75.75 0 00-.75-.75H3zm9.75 0a.75.75 0 00-.75.75v18l2.9-1.035a.75.75 0 00.565 0L21 18.75V3a.75.75 0 00-.75-.75h-7.5z" clipRule="evenodd" />
      </svg>
    ), 
    path: "/report" 
  },
];

const AgentNavbar = () => {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const userName = "Aamir";
  const userMobile = "930XXXXXXX";

  const generateReferralCode = () => {
    const namePart = userName.substring(0, 3).toUpperCase();
    const mobilePart = userMobile.substring(0, 3);
    const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `${namePart}${mobilePart}${randomPart}`;
  };

  const handleReferClick = () => {
    const code = generateReferralCode();
    alert(`Your referral code: ${code}`);
  };

  const isMobile = windowWidth <= 768;

  return (
    <div className="w-full bg-gradient-to-r from-yellow-50 to-yellow-100 shadow-sm overflow-visible">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 overflow-visible">
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center">
          {/* Mobile Menu Button */}
          {isMobile && (
            <button 
              onClick={toggleMobileMenu}
              className="mr-3 text-gray-700 hover:text-yellow-600 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          )}
          
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => navigate("/")}
          >
            <img
              src="/logo-removebg-preview.png"
              alt="Quick Cred"
              className="w-12 h-12 sm:w-16 sm:h-16 mr-2 transition-transform group-hover:scale-105"
              style={{ objectFit: "contain" }}
            />
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent tracking-wide">
              QUICK CRED
            </span>
          </div>
        </div>

        {/* Desktop Actions */}
        {!isMobile && (
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Wallet Icon */}
            <button
              className="flex items-center bg-gradient-to-r from-amber-400 to-amber-500 text-white px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl shadow-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              style={{ border: "1px solid rgba(251, 191, 36, 0.3)" }}
              title="Wallet"
              onClick={()=> navigate("/MyWallet")}
            >
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6 mr-1 sm:mr-2" 
                viewBox="0 0 24 24" 
                fill="none"
              >
                <path 
                  d="M19 7H5C3.89543 7 3 7.89543 3 9V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V9C21 7.89543 20.1046 7 19 7Z" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  fill="rgba(255, 255, 255, 0.2)"
                />
                <path 
                  d="M16 7V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V7" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <circle 
                  cx="17.5" 
                  cy="14.5" 
                  r="1.5" 
                  fill="currentColor"
                />
                <path 
                  d="M17 14H21" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-sm sm:text-base font-semibold text-white drop-shadow-sm">My Wallet</span>
            </button>
            
            {/* Right side: Refer a friend & user */}
            <div className="flex items-center space-x-3 sm:space-x-6">
              <button 
                className="flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-full shadow-md hover:shadow-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300"
                onClick={handleReferClick}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                <span className="text-xs sm:text-sm font-medium">Refer a friend</span>
              </button>
              
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-sm sm:text-base">
                  {userName.charAt(0)}
                </div>
                <span className="text-sm sm:text-base text-gray-800 font-medium hidden sm:block">{userName}</span>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Actions (shown only on mobile) */}
        {isMobile && (
          <div className="flex items-center space-x-3">
            <button 
              className="flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-white p-2 rounded-full shadow-md hover:shadow-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300"
              onClick={handleReferClick}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </button>
            
            <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
              {userName.charAt(0)}
            </div>
          </div>
        )}
      </div>
      
      {/* Desktop Navigation */}
      {!isMobile && (
        <div className="w-full bg-white/90 backdrop-blur-sm border-b border-yellow-200 relative z-50">
          <div className="max-w-7xl mx-auto flex items-center overflow-x-auto">
            {navLinks.map((item, idx) => (
              <div 
                key={idx}
                className="relative group flex-shrink-0"
                onMouseEnter={() => item.dropdown && toggleDropdown(idx)}
                onMouseLeave={() => item.dropdown && closeDropdowns()}
                style={{ zIndex: item.dropdown && activeDropdown === idx ? 1000 : "auto" }}
              >
                <div
                  className={`flex items-center px-3 py-2 sm:px-5 sm:py-3 cursor-pointer transition-all duration-200 ${activeDropdown === idx ? 'bg-yellow-50 text-yellow-700' : 'hover:bg-yellow-50 hover:text-yellow-600'}`}
                  onClick={() => !item.dropdown && navigate(item.path)}
                >
                  <span className={`${activeDropdown === idx ? 'text-yellow-600' : 'text-gray-700'} group-hover:text-yellow-600`}>
                    {item.icon}
                  </span>
                  <span className={`ml-2 text-xs sm:text-sm font-medium ${activeDropdown === idx ? 'text-yellow-700' : 'text-gray-700'} group-hover:text-yellow-600`}>
                    {item.label}
                  </span>
                  {item.dropdown && (
                    <svg 
                      className={`w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 transition-transform ${activeDropdown === idx ? 'rotate-180 text-yellow-600' : 'text-gray-500'}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === idx && (
                  <div 
                    className="absolute left-0 mt-0 w-56 bg-white shadow-xl rounded-b-lg z-[9999] border border-yellow-100 overflow-visible"
                    style={{ top: "100%" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.dropdown.map((subItem, subIdx) => (
                      <div
                        key={subIdx}
                        className="px-4 py-3 hover:bg-yellow-50 cursor-pointer transition-colors duration-200 flex items-center"
                        onClick={() => {
                          navigate(subItem.path);
                          closeDropdowns();
                        }}
                      >
                        <span className="mr-3 text-lg">{subItem.icon}</span>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-yellow-600">
                          {subItem.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Navigation Menu */}
      {isMobile && isMobileMenuOpen && (
        <div className="w-full bg-white/95 backdrop-blur-sm border-b border-yellow-200 relative z-50">
          <div className="flex flex-col">
            {navLinks.map((item, idx) => (
              <div key={idx} className="border-b border-yellow-100 last:border-b-0">
                <div
                  className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-all duration-200 ${activeDropdown === idx ? 'bg-yellow-50 text-yellow-700' : 'hover:bg-yellow-50 hover:text-yellow-600'}`}
                  onClick={() => {
                    if (!item.dropdown) {
                      navigate(item.path);
                      setIsMobileMenuOpen(false);
                    } else {
                      toggleDropdown(idx);
                    }
                  }}
                >
                  <div className="flex items-center">
                    <span className={`${activeDropdown === idx ? 'text-yellow-600' : 'text-gray-700'} group-hover:text-yellow-600`}>
                      {item.icon}
                    </span>
                    <span className={`ml-3 text-sm font-medium ${activeDropdown === idx ? 'text-yellow-700' : 'text-gray-700'} group-hover:text-yellow-600`}>
                      {item.label}
                    </span>
                  </div>
                  {item.dropdown && (
                    <svg 
                      className={`w-4 h-4 transition-transform ${activeDropdown === idx ? 'rotate-180 text-yellow-600' : 'text-gray-500'}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>
                
                {/* Mobile Dropdown Menu */}
                {item.dropdown && activeDropdown === idx && (
                  <div className="bg-yellow-50/50 pl-12 pr-4">
                    {item.dropdown.map((subItem, subIdx) => (
                      <div
                        key={subIdx}
                        className="py-2.5 hover:bg-yellow-100 cursor-pointer transition-colors duration-200 flex items-center"
                        onClick={() => {
                          navigate(subItem.path);
                          setIsMobileMenuOpen(false);
                          closeDropdowns();
                        }}
                      >
                        <span className="mr-3 text-lg">{subItem.icon}</span>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-yellow-600">
                          {subItem.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Wallet Button */}
            <div className="px-4 py-3 border-t border-yellow-200">
              <button
                className="w-full flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 py-2.5 rounded-lg shadow-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-300"
                onClick={() => {
                  navigate("/MyWallet");
                  setIsMobileMenuOpen(false);
                }}
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  viewBox="0 0 24 24" 
                  fill="none"
                >
                  <path 
                    d="M19 7H5C3.89543 7 3 7.89543 3 9V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V9C21 7.89543 20.1046 7 19 7Z" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    fill="rgba(255, 255, 255, 0.2)"
                  />
                  <path 
                    d="M16 7V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V7" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <circle 
                    cx="17.5" 
                    cy="14.5" 
                    r="1.5" 
                    fill="currentColor"
                  />
                  <path 
                    d="M17 14H21" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round"
                  />
                </svg>
                <span className="font-semibold text-white drop-shadow-sm">My Wallet</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentNavbar;