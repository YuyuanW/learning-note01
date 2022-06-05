const string =   `
*{
    box-sizing: border-box;
    margin: 0;
}
::after,::before{
    box-sizing: border-box;
    margin: 0;
}
.skin{
    background: rgb(255,230,0);
    min-height: 50vh;
    width: 100%;

    position: relative;

    z-index: 1;
}



.nose{
    border: 20px solid red;
    width:40px;
    height: 40px;

    position: absolute;
    left:50%;
    top:80px;
    margin-left:-20px;
    margin-top: -20px;

    border-radius: 50% 50% 0 0 ;
    border-color: rgb(0,0,0) transparent transparent transparent;

    z-index: 4;
}

@keyframes wave {
    0%{
        transform: rotate(0deg);
    }
    25%{
        transform: rotate(10deg);      
    }
    50%{
        transform: rotate(0deg);      
    }
    75%{
        transform: rotate(-10deg);
    }
    100%{
        transform: rotate(0deg);
    }
}

.nose:hover{
    animation: wave 300ms infinite;
}

.eye{
    border:3px solid black;
    width: 84px;
    height: 84px;
    
    position: absolute;
    left:50%;
    top:80px;

    border-radius: 50%;
    background: rgb(46,46,46);
}

.eye.left{
    margin-left: -160px;
    margin-top: -64px;
}

.eye.right{
    margin-left:76px;
    margin-top:-64px;
}

.eyeball{
    border:3px solid black;
    width: 36px;
    height: 36px;

    margin-left: 14px;
    margin-top: 2px;

    border-radius: 50%;
    background-color: white;
}

.cheek{
    border:4px solid black;
    width:128px;
    height: 128px;

    position: absolute;
    left:50%;
    top:80px;

    border-radius: 50%;
    background-color: #FF0000;
}

.cheek.left{
    margin-left: -250px;
    margin-top:64px;
}

.cheek.right{
    margin-left:120px;
    margin-top:64px;
}


.mouth{
  
    width:200px;
    height:250px;

    position: absolute;
    left:50%;
    margin-left: -100px;
    top:80px;
    margin-top: 16px;

    overflow: hidden;
    
}



.lip{
    border:4px solid  black;
    width:100px;
    height:30px;

    position: absolute;
    margin-left: 50px;
    margin-top: -6px;

    border-radius: 0px 0px 0px 100px;

    background-color: #FFE600;

    z-index: 2;

}

.lip.left{
    transform: translateX(-48px) rotate(-15deg);
    border-radius: 0px 0px 0px 100px;
    border-color: transparent transparent transparent black;
}

.lip.right{
    transform: translateX(48px) rotate(15deg);
    border-radius: 0px 0px 100px 0px;
    border-color: transparent black transparent transparent;
}

.x1{
    width:8px;
    height:4px;
    background-color: black;

    border-radius: 50% 0 0  0;
    position: absolute;
    left:50%;
    margin-left: -5px;
    margin-top: 8px;

    z-index: 5;
}

.x2{
    width:180px;
    height:0px;
    margin-left: 8px;

    border:4px solid #FFE600;
    z-index: 8;
    position: absolute;

    background-color: #FFE600;

}

.mouth > .lipdown{
    border: 4px solid black;
    width: 150px;
    height: 400px;
    margin-left: 25px;

    position: absolute;
    bottom: 0;

    border-radius: 150px/400px;

    background-color: rgb(155,0,10);

    overflow: hidden;
    
}

.lipdown > .cop{
    border:1px solid red;
    width:150px;
    height:180px;

    position: absolute;
    bottom:0px;
    margin-left: -4px;

    border-radius: 150px/180px;
    background-color: rgb(255,72,95);
}
`
export default string ;