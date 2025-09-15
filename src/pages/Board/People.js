import React from 'react';
import Card from "../../components/Card"
import styles from "../../styles/Board/People.module.css"
import Hashim from "../../assets/board/hashim.jpg"
import Saeed from "../../assets/board/saeed.jpg"
import Amal from "../../assets/board/amal.jpg"
import Azmarak from "../../assets/board/azmarak.jpg"
import Mashal from "../../assets/board/mashal.jpg"
import Mustafa from "../../assets/board/mustafa.jpg"
import Raaed from "../../assets/board/raaed.jpg"
import Sundus from "../../assets/board/sundus.jpg"
import Shayan from "../../assets/board/shayan.jpg"
import Neha from "../../assets/board/neha.jpg"
import Shahbano from "../../assets/board/shahbano.jpg"
import Nastaasia from "../../assets/board/nastaasia.jpg"
import Aisha from "../../assets/board/aisha.jpg"

function People() {
    return ( 
    <div className={styles.container}>
        <div className={styles.gridItem}>
            <Card firstName="Saeed" lastName="Naeem" role="President" avi={Saeed} email="saeednaeem@berkeley.edu"/>
        </div>
        <div className={styles.gridItem}>
            <Card firstName="Hashim" lastName="Piracha" role="Director of Operations" avi={Hashim} email="hashim7@berkeley.edu"/>
        </div>
        <div className={styles.gridItem}>
            <Card firstName="Azmarak" lastName="Kakakhel" role="Director of Finance" avi={Azmarak} email="azmarak.kakakhel@berkeley.edu"/>
        </div>
        <div className={styles.gridItem}>
            <Card firstName="Mashal" lastName="Imtiaz" role="Secretary" avi={Mashal} email="mashalimtiaz@berkeley.edu"/>
        </div>
        <div className={styles.gridItem}>
            <Card firstName="Amal" lastName="Imran" role="Co-Director of Logistics" avi={Amal} email="aimran2021@berkeley.edu"/>
        </div>
        <div className={styles.gridItem}>
            <Card firstName="Raaed" lastName="Kamran" role="Co-Director of Logistics" avi={Raaed} email="raaed.kamran@berkeley.edu"/>
        </div>
        <div className={styles.gridItem}>
            <Card firstName="Mustafa" lastName="Jawaid" role="Director of Internal Affairs" avi={Mustafa} email="mustafajawaid@berkeley.edu"/>
        </div>
        <div className={styles.gridItem}>
            <Card firstName="Jazem" lastName="Siddiqui" role="Prime Minister" email="jazem@berkeley.edu"/>
        </div>
        <div className={styles.gridItem}>
            <Card firstName="Sundus" lastName="Khan" role="Director of Marketing" avi={Sundus} email="sunduskh@berkeley.edu"/>
        </div>
        <div className={styles.gridItem}>
            <Card firstName="Shayan" lastName="Abbas" role="Intern" avi={Shayan} email="shayannabas@berkeley.edu"/>
        </div>
        <div className={styles.gridItem}>
            <Card firstName="Shahbano" lastName="Haroon" role="Intern" avi={Shahbano} email="shahbanoharoon@berkeley.edu"/>
        </div>
        <div className={styles.gridItem}>
            <Card firstName="Nastaasia" lastName="Haq" role="Intern" avi={Nastaasia} email="nastaasiahaq@berkeley.edu"/>
        </div>
        <div className={styles.gridItem}>
            <Card firstName="Aisha" lastName="Ashamu" role="Intern" avi={Aisha} email="ashamuao@berkeley.edu"/>
        </div>
        <div className={styles.gridItem}>
            <Card firstName="Neha" lastName="Masood" role="Intern" avi={Neha} email="nehamasood@berkeley.edu"/>
        </div>
    </div> );
}

export default People;