"use client"
import React, { useState } from 'react'

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
                        ],
                        price: 500
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
                        ],
                        price: 300
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
                                rowname: 'H',
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
                        ],
                        price: 100
                    }

                ]
            },
            {
                time: '12:00 AM',
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
                        ],
                        price: 500
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
                        ],
                        price: 300
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
                        ],
                        price: 100
                    }

                ]
            },
            {
                time: '14:00 AM',
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
                        ],
                        price: 500
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
                        ],
                        price: 300
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
                                rowname: 'H',
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
                        ],
                        price: 100
                    }

                ]
            },

        ]
    }

    const generateSeatLayout = () => {
        const currentTime = screen.timeslots.findIndex((slot: any) => slot.time === selectedTime.time);
        return screen.timeslots[currentTime].seats.map((seatType, index) => (
            <div className="seat-type" key={index}>
                <h2>{seatType.type} - {seatType.price} ₪</h2>
                <div className='seat-rows'>
                    {
                        seatType.rows.map((row, rowIndex) => (
                            <div className="seat-row" key={rowIndex}>
                                <p className="rowname">{row.rowname}</p>
                                <div className="seat-cols">
                                    <div className="seat-col">
                                        {row.seats.map((seat, seatIndex) => (
                                            <div key={seatIndex}>
                                                {
                                                    seat.status === 'available' &&
                                                    <span className='seat-available'> {row.rowname.toUpperCase()}{seat.seat_id} </span>
                                                }
                                                {
                                                    seat.status === 'not-available' &&
                                                    <span className='seat-not-available'> {row.rowname.toUpperCase()}{seat.seat_id} </span>
                                                }
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        ))
    }

    const [selectedTime, setSelectedTime] = useState(screen.timeslots[0])

    return (
        <div className="selectseatpage">
            <div className="s1">
                <div className="head">
                    <h1>{movie.moviename} - {movie.language}</h1>
                    <h3>{movie.genre.join(' / ')}</h3>
                </div>
            </div>

            <div className="selectseat">
                <div className="timecont">
                    {screen.timeslots.map((timeslot: any, index) => (
                        <h3 key={index} className={selectedTime.time === timeslot.time ? 'time selected' : 'time'}
                            onClick={() => setSelectedTime(timeslot)}>
                            {timeslot.time}
                        </h3>
                    ))}
                </div>
                <div className='indicators'>
                    <div>
                        <span className='seat-unavailable'></span>
                        <p>Not available</p>
                    </div>
                    <div>
                        <span className='seat-available'></span>
                        <p>Available</p>
                    </div>
                    <div>
                        <span className='seat-selected'></span>
                        <p>Selected</p>
                    </div>
                </div>

                {generateSeatLayout()}
                <div className="totalcount"></div>
            </div>
        </div>
    )
}

export default page