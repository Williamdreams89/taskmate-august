import React from 'react'
import { PropagateLoader } from 'react-spinners';
import styled from 'styled-components'


const Preloading = styled.div`
    background:  url(../bg.jpg) no-repeat;
    background-size:cover;
    width: 100vw;
    height: 100vh;
    color: white;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    
    div{
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, .7);
      width: 80%;
      height: 100px;
      display: flex;
      flex-direction: column;

      .small{
        display: flex;

        p{
          font-weight: 700;
          span{
            color: orangered
          }
        }
      }

      small{
        color: orangered;
      }
    }

`;
function Preloader({loading}) {
  return (
    <Preloading>
      <div>
        <PropagateLoader color='orangered' style={{marginBottom: "2rem"}} loading={loading} />
        <h4 style={{borderRight: "5px solid white", paddingRight: "5px"}} >Live Everyday As A Professional With Taskmate</h4 >
        <div className='small'>
          <p>William <span>Dreams</span></p>
          <small>&copy;2022</small>
        </div>
      </div>
        
    </Preloading>
  )
}

export default Preloader