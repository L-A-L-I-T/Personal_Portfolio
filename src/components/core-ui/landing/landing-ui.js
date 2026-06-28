import React from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import Typed from "react-typed";
import { headerData } from "../../../data/headerData";
import "./landing.css";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { contactsData } from "../../../data/contactsData";

function LandingUI({ theme, drawerOpen, classes }) {
	return (
		<div className="landing" style={{ backgroundColor: theme.quaternary }}>
			<div className="landing--container">
				<div className="landing-left">
					<p className="landing-kicker" style={{ color: theme.primary }}>
						Available for Fullstack Roles
					</p>
					<h1 style={{ color: theme.tertiary }}>
						{headerData.name}
					</h1>
					<Typed
						strings={[
							"Building high-impact backend systems",
							"Crafting clean frontend experiences",
							"Shipping reliable fullstack products",
						]}
						typeSpeed={34}
						backSpeed={30}
						className="typed-header"
						style={{ color: theme.primary }}
						loop
					/>
					<p style={{ color: theme.tertiary }}>{headerData.desciption}</p>
					<div className="lcr-buttonContainer">
						{headerData.resumePdf && (
							<a
								href={headerData.resumePdf}
								download="resume"
								target="_blank"
								rel="noreferrer"
							>
								<button className={classes.resumeBtn}>Download CV</button>
							</a>
						)}
						<NavLink to="/#projects" smooth={true} spy="true" duration={1200}>
							<button className={classes.contactBtn}>View Projects</button>
						</NavLink>
					</div>
					<div className="hero-metrics">
						<div className="metric-card" style={{ backgroundColor: theme.quaternary }}>
							<strong style={{ color: theme.primary }}>3+</strong>
							<span style={{ color: theme.tertiary }}>Years Experience</span>
						</div>
						<div className="metric-card" style={{ backgroundColor: theme.quaternary }}>
							<strong style={{ color: theme.primary }}>Fullstack</strong>
							<span style={{ color: theme.tertiary }}>Node.js • React • Agentic AI</span>
						</div>
					</div>
				</div>
				<div className="landing-right">
					<img
						src={headerData.image}
						alt={headerData.name}
						className="landing--img"
						style={{
							opacity: `${drawerOpen ? "0" : "1"}`,
							borderColor: theme.primary,
						}}
					/>
					<div className="social-row">
						{contactsData.linkedIn && (
							<a href={contactsData.linkedIn} target="_blank" rel="noreferrer">
								<FaLinkedin className="landing--social" style={{ color: theme.primary }} aria-label="LinkedIn" />
							</a>
						)}
						{contactsData.github && (
							<a href={contactsData.github} target="_blank" rel="noreferrer">
								<FaGithub className="landing--social" style={{ color: theme.primary }} aria-label="GitHub" />
							</a>
						)}
						{contactsData.twitter && (
							<a href={contactsData.twitter} target="_blank" rel="noreferrer">
								<FaTwitter className="landing--social" style={{ color: theme.primary }} aria-label="Twitter" />
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default LandingUI;
