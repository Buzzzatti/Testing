import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadPhotos, loadUsers} from "../../redux/actions";
import CardBlock from "../CardBlock";
import styles from './styles.module.scss'

const Main = () => {
    const dispatch = useDispatch();
    const { photos, users, loading } = useSelector(({ common }) => common );

    useEffect(() => {
        dispatch(loadPhotos());
        dispatch(loadUsers());
    },[dispatch]);




    // короче, почему была ошибкка с данными. потому, что на момент загрузки данных ты хотел отобразить сразу компонент. а так, мы сделали до проверку, что если loading === true и когда длинна массива больше 1, то только тогда отображаться компонент

    // а вот это какая-то шинима хуйня....там если ее перезагружать то тона работает через раз пиздец.

    // у меня похожая тема сейчас с native. я долго мучался с этим... тоже через раз работает, но там немного другие у меня
    // там все падает, когда я деструктуризацию пытаюсь делать
    // ща, я в гугл пока сбегаю
  return (
      <div className={styles.wrap}>
          {!loading && photos.data.length > 1
              ? ( <CardBlock className={styles.wrap__card} data={photos.data} users={users}/> )
              : <span>Данных не найдено</span>
          }
      </div>
  );
};

export default Main;