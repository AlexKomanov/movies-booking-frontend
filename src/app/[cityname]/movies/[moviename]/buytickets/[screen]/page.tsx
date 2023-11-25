import React from 'react'

const page = () => {

    const movie = {
        moviename: 'I am Legend',
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

      const screen = {
        name: 'Screen 1',
        location: "MovieLand, Karmiel",
        timeslots: [
            {
                time: '10:00 AM',
                seats: [
                    {
                        // VIP Seats
                        type: 'vip',
                        rows: [
                            {
                                // row A
                                rowname: 'A',
                                seats: [
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '1'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '2'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '3'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '4'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '5'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '6'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '7'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '8'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '9'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '10'
                                    }
                                ]
                            },
                            {
                                // row B
                                rowname: 'B',
                                seats: [
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '1'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '2'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '3'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '4'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '5'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '6'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '7'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '8'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '9'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '10'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        // Silver Seats
                        type: 'silver',
                        rows: [
                            {
                                // row C
                                rowname: 'C',
                                seats: [
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '1'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '2'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '3'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '4'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '5'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '6'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '7'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '8'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '9'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '10'
                                    }
                                ]
                            },
                            {
                                // row D
                                rowname: 'D',
                                seats: [
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '1'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '2'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '3'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '4'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '5'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '6'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '7'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '8'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '9'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '10'
                                    }
                                ]
                            },
                            {
                                // row E
                                rowname: 'E',
                                seats: [
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '1'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '2'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '3'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '4'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '5'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '6'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '7'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '8'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '9'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '10'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        // Regular Seats
                        type: 'regular',
                        rows: [
                            {
                                // row F
                                rowname: 'F',
                                seats: [
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '1'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '2'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '3'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '4'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '5'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '6'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '7'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '8'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '9'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '10'
                                    }
                                ]
                            },
                            {
                                // row G
                                rowname: 'G',
                                seats: [
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '1'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '2'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '3'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '4'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '5'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '6'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '7'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '8'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '9'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '10'
                                    }
                                ]
                            },
                            {
                                // row H
                                rownamH: 'E',
                                seats: [
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '1'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '2'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '3'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '4'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '5'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '6'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '7'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '8'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '9'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '10'
                                    }
                                ]
                            },
                            {
                                // row I
                                rowname: 'I',
                                seats: [
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '1'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '2'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '3'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '4'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '5'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '6'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '7'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '8'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '9'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '10'
                                    }
                                ]
                            },
                            {
                                // row J
                                rowname: 'J',
                                seats: [
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '1'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '2'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '3'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '4'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '5'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '6'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '7'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '8'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'available',
                                        seat_id: '9'
                                    },
                                    {
                                        type: 'seat',
                                        status: 'not-available',
                                        seat_id: '10'
                                    }
                                ]
                            }
                        ]
                    }

                ]
            }
        ]
      }

  return (
    <div>page</div>
  )
}

export default page