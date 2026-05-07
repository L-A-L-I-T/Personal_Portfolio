import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Container,
	IconButton,
	Link,
	Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { HiExternalLink } from "react-icons/hi";
import Slider from "react-slick";
import { ThemeContext } from "../../../contexts/theme-context";
import { certificateData } from "../../../data/certificateData";
import "./certificate.css";

const Certificate = () => {
	const { theme } = useContext(ThemeContext);

	const settings = {
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<Container sx={{ py: 6 }} id="certificates">
			<div className="certificate-header">
				<h1
					style={{
						color: theme.primary,
					}}
				>
					Certificates
				</h1>
			</div>
			<Slider {...settings}>
				{certificateData.map((item) => (
					<Card
						key={item.id}
						sx={{
							height: { xs: 320, sm: 460 },
							backgroundColor: theme.quaternary,
							border: "1px solid",
							borderColor: theme.buttonColor,
							borderRadius: "16px",
						}}
					>
						<CardActionArea>
							<CardMedia
								component="img"
								sx={{
									height: { xs: 250, sm: 390 },
									borderBottom: "1px solid",
									borderColor: theme.buttonColor,
								}}
								image={item.image}
								alt={item.title}
							/>
							<CardContent
								sx={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									color: theme.tertiary,
								}}
							>
								<Typography sx={{ fontFamily: "var(--primaryFont)", fontSize: "0.95rem" }}>{item.title}</Typography>
								<IconButton sx={{ color: theme.primary }}>
									<Link href={item.link} target="_blank" sx={{ color: "inherit" }}>
										<HiExternalLink />
									</Link>
								</IconButton>
							</CardContent>
						</CardActionArea>
					</Card>
				))}
			</Slider>
		</Container>
	);
};

export default Certificate;
