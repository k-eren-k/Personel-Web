import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from '@mui/icons-material/YouTube';import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";

export const socialMediaLinks = [
  {
    type: "email",
    link: "mailto:esappms@outlook.com",
    icon: <EmailIcon className="fill-white" />,
    label: "email",
  },
 
  {
    type: "github",
    link: "https://github.com/DalgaGamePlay",
    icon: <GitHubIcon className="fill-white" />,
    label: "GitHub",
  },
  {
    type: "Dıscord",
    link: "https://www.youtube.com/channel/UCovTPHMeqiKOaOvuYBoSErQ",
    icon: <YouTubeIcon className="fill-white" />,
    label: "Telegram",
  },
];
