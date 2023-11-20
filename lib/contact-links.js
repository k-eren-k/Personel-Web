import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";

export const socialMediaLinks = [
  {
    type: "email",
    link: "mailto:sametcn99@gmail.com",
    icon: <EmailIcon className="fill-white" />,
    label: "email",
  },
  {
    type: "linkedin",
    link: "https://www.linkedin.com/in/samet-can-c%C4%B1nc%C4%B1k/",
    icon: <LinkedInIcon className="fill-white" />,
    label: "LinkedIn",
  },
  {
    type: "github",
    link: "https://github.com/sametcn99",
    icon: <GitHubIcon className="fill-white" />,
    label: "GitHub",
  },
  {
    type: "telegram",
    link: "https://t.me/sametc0",
    icon: <TelegramIcon className="fill-white" />,
    label: "Telegram",
  },
];
