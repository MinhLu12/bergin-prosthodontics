import React from "react";
import Summary from "./Summary/Summary";
import ContactInfo from "./ContactInfo/ContactInfo";
import BeforeAndAfter from "./BeforeAndAfter/BeforeAndAfter";
import FeaturedServices from "./FeaturedServices/FeaturedServices"
import Title from "./Title/Title";

export default function FrontPage() {
	return (
		<>
			<Title></Title>
			<Summary></Summary>
			<BeforeAndAfter></BeforeAndAfter>
			<FeaturedServices></FeaturedServices>
			<ContactInfo></ContactInfo>
		</>
	)
}