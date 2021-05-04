import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import differenceInCalendarWeeksWithOptions from 'date-fns/esm/fp/differenceInCalendarWeeksWithOptions/index.js';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        width: '100%',
        margin: '25px 15px'
    },
    media: {
        height: 140,
    },
});

const CardBlock = ({ data, users }) => {
    const classes = useStyles();

    const someAlbum = Object.values(data).filter((item) => item.albumId);
    const someUser = Object.values(users).filter((profile) => profile.id);

    console.log(someAlbum);
    console.log(someUser);

    

    return data?.map((item) => {
        const currentUser = users?.find(user => user.id === item.albumId);
        console.log(currentUser);
        return (
            <Card key={item.id} className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={item.url}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" >
                            {currentUser.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/* //здесь мы как раз меняем этим на линком урл строку на ауфер
                    //понятно?
                    // да а пути все там прописываются ? или же условно может быть и внутри к примеру автора быть такой switch в 
                    котором следующие пути ?

                    // если тебе нужно будет где-то еще поменять путь, то в нав линке ты пишешь нав линк с этим урл путем
                    // а в апп ты добавляешь рооут с этим прорверочным путем
                    // а если тебе нужно например в компоненте сделать дополнительный роут, то тут уже не роут нужен, тут просто 
                    //тогглер, потому чтоо ооот смены внутри какого-то дочернего компонента какого-то мелкоого не доолжно влечь за собой смену урл строки
                    // то есть если дальше я сделаю к примеру альбомы этого автора то там нужен только тогл ?
                    // понятно?
                    ну получается что тоггл используется только если меняется к примеру фото на странице а не вся страница ?
                    // если честно, я не понял
                    ну смотри мы создали сейчас путь к альбому вернее роут для переключения от урлы 
                    НО если я в компоненте Аутер поставлю ссылку на компоненту Альбом и они связаны разве тогда роут будет работать ?
                    // будет, ты ведь никак не привязываешь комопоненты, ты хоть в апп можешь нав линки ставить, просто главные в свитчере обработка данного путя была
                    то есть у меня будет Авторы/Автор/ДанныеАвтора/АльбомАвтора ?
                    // я тебя не понял
                    //щ поа читай об этом лучше
                    // или лучше видеоуроки в гугле попробуй найти
                    // я где-то видел хороший по маршрутизации, если найду скину тебе
                    хорошо спасибо большое 
                    должен будешь
                    я побежал */}
                    <NavLink to="/auther" onClick={ (currentUser) => users={currentUser} }>OCHKO</NavLink>    
                </CardActions>
            </Card>
        );
    });
};


export default CardBlock;