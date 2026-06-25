"use client";

import React from 'react';
import { BsSquareFill } from 'react-icons/bs';
import { HiOutlineArrowRight } from 'react-icons/hi';

interface NavLinkItem {
  label: string;
  href: string;
}

export default function ServicesMenu() {
  const collaborationLinks: NavLinkItem[] = [
    { label: 'Staff Augmentation', href: '#' },
    { label: 'Managed Service', href: '#' },
    { label: 'Digital Transformation', href: '#' },
    { label: 'Technology Consulting', href: '#' },
    { label: 'MVP Development', href: '#' },
  ];

  const topServicesCol1: NavLinkItem[] = [
    { label: 'ML & AI Development', href: '#' },
    { label: 'Data Engineering', href: '#' },
    { label: 'Data Migration', href: '#' },
    { label: 'Business Intelligence', href: '#' },
    { label: 'Insurtech', href: '#' },
    { label: '3D Modeling Services', href: '#' },
    { label: 'Game Studio', href: '#' },
    { label: 'QA Testing & Automation', href: '#' },
  ];

  const topServicesCol2: NavLinkItem[] = [
    { label: 'LMS Development', href: '#' },
    { label: 'Web & Mobile App Development', href: '#' },
    { label: 'eCommerce Development', href: '#' },
    { label: 'Adobe Experience Manager', href: '#' },
    { label: 'SharePoint Services', href: '#' },
    { label: 'Blockchain Development', href: '#' },
    { label: 'Shopify Services', href: '#' },
  ];

  const enterpriseLinks: NavLinkItem[] = [
    { label: 'Field Force Automation', href: '#' },
    { label: 'Banking Solutions', href: '#' },
    { label: 'Cloud Solutions', href: '#' },
    { label: 'Cyber Security', href: '#' },
    { label: 'ERP Development', href: '#' },
    { label: 'Data Science & Business Intelligence', href: '#' },
  ];

  return (
    <div className="nav-container">
      {/* Left Side Section */}
      <div className="col-models">
        <h2>Collaboration Models</h2>
        <p className="subtitle">AI-powered dev for 10X faster software delivery.</p>
        
        <ul className="nav-links">
          {collaborationLinks.map((link, idx) => (
            <li key={idx}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        
        <hr className="divider" />
        
        <div className="partner-section">
          <div className="partner-logo">
            <span className="logo-placeholder">Logo</span> 
            <span className="partner-label">Solution Partner</span>
          </div>
          <p className="partner-text">
            A Journey Towards Digital Excellence in Retail.{' '}
            <a href="#" className="inline-link">Read case study.</a>
          </p>
        </div>
      </div>

      {/* Right Side Services Grid */}
      <div className="services-grid">
        {/* Top Services Column 1 */}
        <div className="services-column">
          <h3 className="column-title">
            <BsSquareFill className="square-icon" /> Top Services
          </h3>
          <ul className="nav-links">
            {topServicesCol1.map((link, idx) => (
              <li key={idx}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          
          <a href="#" className="all-services-link">
            All Services <HiOutlineArrowRight className="arrow-icon" />
          </a>
        </div>

        {/* Top Services Column 2 */}
        <div className="services-column">
          <h3 className="column-title hidden-title">&nbsp;</h3>
          <ul className="nav-links">
            {topServicesCol2.map((link, idx) => (
              <li key={idx}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Enterprise Column */}
        <div className="services-column">
          <h3 className="column-title">
            <BsSquareFill className="square-icon" /> Enterprise Focused
          </h3>
          <ul className="nav-links">
            {enterpriseLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}