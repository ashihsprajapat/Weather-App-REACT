import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


import ColdIcon from '@mui/icons-material/AcUnit';
import HotIcon from '@mui/icons-material/WbSunny';
import RainIcon from '@mui/icons-material/Thunderstorm';

function InfoResult({info}) {
    
    let info2=info;
    // let info = {
    //     city: "Jaipur",
    //     country: "IN",
    //     description: "mist",
    //     feelsLike: 16.35,
    //     humidity: 77,
    //     temp: 16.62,
    //     weather: "haze",
    //     tempMax: 16.62,
    //     tempMin: 16.62,
    // }

    let Img_Url = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let COLD_ur="https://media.istockphoto.com/id/2180434900/photo/skier-riding-towards-sun-halo-sun-dog-during-heli-skiing-session-in-the-kootenays-kaslo-b-c.webp?a=1&b=1&s=612x612&w=0&k=20&c=AoIpqQeuTweJR_iSOc8XTCiMwLwk60IyRUkM1-L5c9w=";
    let HOT_url="https://images.unsplash.com/photo-1484766280341-87861644c80d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwc2Vzc2lvbiUyMGVudmlyZW9ubWVudCUyMHdpdGglMjBzdW58ZW58MHx8MHx8fDA%3D";
    let RAIN_url="https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW4lMjBzZXNzaW9uJTIwZW52aXJlb25tZW50fGVufDB8fDB8fHww";
    return (<>
        <div className="infoBox" >
            <div className='cardContainer' >
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info2.humidity>80 ? RAIN_url :info2.temp<18? COLD_ur : HOT_url}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info2.city}{info2.humidity>80 ? <RainIcon/> :info2.temp<18? <ColdIcon/> : <HotIcon/>}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.danger' }} component={"span"} >
                            <p>
                                Temperature ={info2.temp}&deg;C
                            </p>
                            <p>
                                Humitdity ={info2.humidity}
                            </p>
                            <p>
                                Min Temperature ={info2.tempMin}&deg;C
                            </p>
                            <p>
                                Max Temperature ={info2.tempMax}&deg;C
                            </p>
                            <p>
                                the weather can be describe as <b> <i> {info2.weather} </i></b> ans feel likes as {info2.feelsLike}&deg;C
                            </p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div >
    </>);
}

export default InfoResult;