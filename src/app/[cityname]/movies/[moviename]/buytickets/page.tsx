"use client"
import React from 'react'
import DatePicker from 'react-horizontal-datepicker'
import './BuyTicketsPage.css'
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation'

const BuyTickets = () => {

  const currentPagePath = usePathname();

  const movie = {
    moviename: 'I am Legend',
    // screen: '4Dx',
    date: new Date(),
    language: 'English',
    genre: ['Action', 'Adventure'],
    screens: [
      {
        name: 'Screen 1',
        location: 'MovieLand, Karmiel'
      },
      {
        name: 'Screen 2',
        location: 'Hot Cinema, Karmiel'
      },
      {
        name: 'Screen 3',
        location: 'Yes Planet, Karmiel'
      }
    ]
  }

  const selectedDay = (val: any) => {
    console.log(val)
  };

  return (
    <div className="buytickets">
      <div className="s1">
        <div className='head'>
          <h1>{movie.moviename} - {movie.language}</h1>
          <h3>{movie.genre.join(' / ')}</h3>
        </div>
        <DatePicker getSelectedDay={selectedDay}
                  endDate={100}
                  selectDate={new Date()}
                  labelFormat={"MMMM"}
                  color={"rgb(248, 68, 100)"}          
/>
      </div>
      <div className='screens'>
        {
          movie.screens.map((screen, index) => {
            return (
              <div className="screen" key={index}>
                <div>
                  <h2>{screen.name}</h2>
                  <h3>{screen.location}</h3>
                </div>
                <Link href={`${currentPagePath}/${screen.name}`} className='theme_btn1 linkstylenone'>Select</Link>
              </div>
            )
          } )
        }
      </div>
    </div>
  )
}

export default BuyTickets