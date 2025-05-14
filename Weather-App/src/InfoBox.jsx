import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
  
    return (
        <div className="infoBox">
           
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2"  color= 'text.secondary' component={"span"} >
          
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like = {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    )
}