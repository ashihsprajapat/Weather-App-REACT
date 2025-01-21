
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

 export function ColdIcon(props) {
    return (
        <AcUnitIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </AcUnitIcon>
    );
}

export function HotIcon(props) {
    return (
        <WbSunnyIcon {...props}>
            <path  d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </WbSunnyIcon>
    );
}
export function RainIcon(props) {
    return (
        <ThunderstormIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </ThunderstormIcon>
    );
}