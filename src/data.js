import Img1 from './Images/Img1.jpg';
import Img2 from './Images/Img2.jpg';
import Img3 from './Images/Img3.jpg';
import Img4 from './Images/Img4.jpg';
import Img5 from './Images/Img5.jpg';
import Img6 from './Images/Img6.jpg';
import Img7 from './Images/Img7.jpg';
import Img8 from './Images/Img8.jpg';
import Img9 from './Images/Img9.jpg';
import Img10 from './Images/Img10.jpg';
import Img11 from './Images/Img11.jpg';
import Img12 from './Images/Img12.jpg';
import Room1 from './Images/Room1.jpg';
import Room2 from './Images/Room2.jpg';
import Room3 from './Images/Room3.jpg';
import Room4 from './Images/Room4.jpg';
export default [
    {
    sys:{
        id:"1",
    },
    fields:{
        name:"single economy",
        slug:"single-economy",
        type:"single",
        price:100,
        size:200,
        capacity:1,
        pets:false,
        breakfast:false,
        featured:false,
        description:"Street an ",
        extra:[
            "Full Sized,pH-balanced toiletries",
            "complientary refreshments",
            "Adequate safety/security",
            "Internet",
            "Confortable beds"
        ],
        images:[
            {
            fields:{
                file:{
                    url:Img1,
                }
            }

        },{    
           fields:{
                    file:{
                        url:Room1,
                    }
                }
    
            },{    
                fields:{
                         file:{
                             url:Room2,
                         }
                     }
         
                 }
        
    ],
    }
    },{
        sys:{
            id:"2",
        },
        fields:{
            name:"single basic",
            slug:"single-basic",
            type:"single",
            price:200,
            size:250,
            capacity:2,
            pets:true,
            breakfast:false,
            featured:false,
            description:"Street an ",
            extra:[
                "Full Sized,pH-balanced toiletries",
            "complientary refreshments",
            "Adequate safety/security",
            "Internet",
            "Confortable beds",
            ],
            images:[
                {
                fields:{
                    file:{
                        url:Img1,
                    }
                }
    
            },{    
               fields:{
                        file:{
                            url:Img6,
                        }
                    }
        
                },{    
                    fields:{
                             file:{
                                 url:Img2,
                             }
                         }
             
                     }
            
        ],
        }
        },{
            sys:{
                id:"3",
            },
            fields:{
                name:"single standard",
                slug:"single-standard",
                type:"single",
                price:200,
                size:300,
                capacity:1,
                pets:true,
                breakfast:true,
                featured:false,
                description:"Street an ",
                extra:[
                    "Full Sized,pH-balanced toiletries",
                    "complientary refreshments",
                    "Adequate safety/security",
                    "Internet",
                    "Confortable beds",
                ],
                images:[
                    {
                    fields:{
                        file:{
                            url:Room1,
                        }
                    }
        
                },{    
                   fields:{
                            file:{
                                url:Img8,
                            }
                        }
            
                    },{    
                        fields:{
                                 file:{
                                     url:Room2,
                                 }
                             }
                 
                         }
                
            ],
            }
            },{
                sys:{
                    id:"4",
                },
                fields:{
                    name:"single deluxe",
                    slug:"single-deluxe",
                    type:"single",
                    price:300,
                    size:350,
                    capacity:6,
                    pets:false,
                    breakfast:true,
                    featured:false,
                    description:"Street an ",
                    extra:[
                        "Full Sized,pH-balanced toiletries",
                        "complientary refreshments",
                        "Adequate safety/security",
                        "Internet",
                        "Confortable beds",
                    ],
                    images:[
                        {
                        fields:{
                            file:{
                                url:Img4,
                            }
                        }
            
                    },{    
                       fields:{
                                file:{
                                    url:Img12,
                                }
                            }
                
                        },{    
                            fields:{
                                     file:{
                                         url:Room1,
                                     }
                                 }
                     
                             }
                    
                ],
                }
                },{
                    sys:{
                        id:"5",
                    },
                    fields:{
                        name:"double economy",
                        slug:"double-economy",
                        type:"double",
                        price:300,
                        size:400,
                        capacity:8,
                        pets:true,
                        breakfast:true,
                        featured:false,
                        description:"Street an ",
                        extra:[
                            "Full Sized,pH-balanced toiletries",
                        "complientary refreshments",
                        "Adequate safety/security",
                        "Internet",
                        "Confortable beds",
                        ],
                        images:[
                            {
                            fields:{
                                file:{
                                    url:Img9,
                                }
                            }
                
                        },{    
                           fields:{
                                    file:{
                                        url:Room4,
                                    }
                                }
                    
                            },{    
                                fields:{
                                         file:{
                                             url:Room2,
                                         }
                                     }
                         
                                 }
                        
                    ],
                    }
                    },{
                        sys:{
                            id:"6",
                        },
                        fields:{
                            name:"double basic",
                            slug:"double-basic",
                            type:"double",
                            price:400,
                            size:500,
                            capacity:4,
                            pets:true,
                            breakfast:true,
                            featured:false,
                            description:"Street an ",
                            extra:[
                                "Full Sized,pH-balanced toiletries",
                        "complientary refreshments",
                        "Adequate safety/security",
                        "Internet",
                        "Confortable beds",
                            ],
                            images:[
                                {
                                fields:{
                                    file:{
                                        url:Img3,
                                    }
                                }
                    
                            },{    
                               fields:{
                                        file:{
                                            url:Img4,
                                        }
                                    }
                        
                                },{    
                                    fields:{
                                             file:{
                                                 url:Img6,
                                             }
                                         }
                             
                                     }
                            
                        ],
                        }
                        },{
                            sys:{
                                id:"7",
                            },
                            fields:{
                                name:"double standard",
                                slug:"double-standard",
                                type:"double",
                                price:450,
                                size:550,
                                capacity:3,
                                pets:false,
                                breakfast:true,
                                featured:false,
                                description:"Street an ",
                                extra:[
                                    "Full Sized,pH-balanced toiletries",
                        "complientary refreshments",
                        "Adequate safety/security",
                        "Internet",
                        "Confortable beds",
                                ],
                                images:[
                                    {
                                    fields:{
                                        file:{
                                            url:Img7,
                                        }
                                    }
                        
                                },{    
                                   fields:{
                                            file:{
                                                url:Img8,
                                            }
                                        }
                            
                                    },{    
                                        fields:{
                                                 file:{
                                                     url:Room1,
                                                 }
                                             }
                                 
                                         }
                                
                            ],
                            }
                            },{
                                sys:{
                                    id:"8",
                                },
                                fields:{
                                    name:"double deluxe",
                                    slug:"double-deluxe",
                                    type:"double",
                                    price:400,
                                    size:500,
                                    capacity:5,
                                    pets:false,
                                    breakfast:true,
                                    featured:true,
                                    description:"Street an ",
                                    extra:Img4,
                                    images:[
                                        {
                                        fields:{
                                            file:{
                                                url:Img9,
                                            }
                                        }
                            
                                    },{    
                                       fields:{
                                                file:{
                                                    url:Img5,
                                                }
                                            }
                                
                                        },{    
                                            fields:{
                                                     file:{
                                                         url:Img4,
                                                     }
                                                 }
                                     
                                             }
                                    
                                ],
                                }
                                },{
                                    sys:{
                                        id:"9",
                                    },
                                    fields:{
                                        name:"family economy",
                                        slug:"family-economy",
                                        type:"family",
                                        price:300,
                                        size:500,
                                        capacity:2,
                                        pets:true,
                                        breakfast:true,
                                        featured:false,
                                        description:"Street an ",
                                        extra:[
                                            "Full Sized,pH-balanced toiletries",
                        "complientary refreshments",
                        "Adequate safety/security",
                        "Internet",
                        "Confortable beds",
                                        ],
                                        images:[
                                            {
                                            fields:{
                                                file:{
                                                    url:Img11,
                                                }
                                            }
                                
                                        },{    
                                           fields:{
                                                    file:{
                                                        url:Room3,
                                                    }
                                                }
                                    
                                            },{    
                                                fields:{
                                                         file:{
                                                             url:Img12,
                                                         }
                                                     }
                                         
                                                 }
                                        
                                    ],
                                    }
                                    },{
                                        sys:{
                                            id:"10",
                                        },
                                        fields:{
                                            name:"family basic",
                                            slug:"family-basic",
                                            type:"family",
                                            price:350,
                                            size:550,
                                            capacity:3,
                                            pets:true,
                                            breakfast:true,
                                            featured:false,
                                            description:"Street an ",
                                            extra:[
                                                "Full Sized,pH-balanced toiletries",
                        "complientary refreshments",
                        "Adequate safety/security",
                        "Internet",
                        "Confortable beds",
                                            ],
                                            images:[
                                                {
                                                fields:{
                                                    file:{
                                                        url:Img1,
                                                    }
                                                }
                                    
                                            },{    
                                               fields:{
                                                        file:{
                                                            url:Img3,
                                                        }
                                                    }
                                        
                                                },{    
                                                    fields:{
                                                             file:{
                                                                // url:Img4,
                                                             }
                                                         }
                                             
                                                     }
                                            
                                        ],
                                        }
                                        },{
                                            sys:{
                                                id:"11",
                                            },
                                            fields:{
                                                name:"family standard",
                                                slug:"family-standard",
                                                type:"family",
                                                price:400,
                                                size:600,
                                                capacity:11,
                                                pets:true,
                                                breakfast:false,
                                                featured:false,
                                                description:"Street an ",
                                                extra:[
                                                    "Full Sized,pH-balanced toiletries",
                        "complientary refreshments",
                        "Adequate safety/security",
                        "Internet",
                        "Confortable beds",
                                                ],
                                                images:[
                                                    {
                                                    fields:{
                                                        file:{
                                                            url:Img6,
                                                        }
                                                    }
                                        
                                                },{    
                                                   fields:{
                                                            file:{
                                                                url:Img9,
                                                            }
                                                        }
                                            
                                                    },{    
                                                        fields:{
                                                                 file:{
                                                                     url:Room4,
                                                                 }
                                                             }
                                                 
                                                         }
                                                
                                            ],
                                            }
                                            },{
                                                sys:{
                                                    id:"12",
                                                },
                                                fields:{
                                                    name:"family deluxe",
                                                    slug:"family-deluxe",
                                                    type:"family",
                                                    price:500,
                                                    size:700,
                                                    capacity:7,
                                                    pets:true,
                                                    breakfast:true,
                                                    featured:true,
                                                    description:"Street an ",
                                                    extra:[
                                                        "Full Sized,pH-balanced toiletries",
                        "complientary refreshments",
                        "Adequate safety/security",
                        "Internet",
                        "Confortable beds",
                                                    ],
                                                    images:[
                                                        {
                                                        fields:{
                                                            file:{
                                                                url:Img10,
                                                            }
                                                        }
                                            
                                                    },{    
                                                       fields:{
                                                                file:{
                                                                    url:Room4,
                                                                }
                                                            }
                                                
                                                        },{    
                                                            fields:{
                                                                     file:{
                                                                         url:Img5,
                                                                     }
                                                                 }
                                                     
                                                             }
                                                    
                                                ],
                                                }
                                                },{
                                                    sys:{
                                                        id:"13",
                                                    },
                                                    fields:{
                                                        name:"Presidental",
                                                        slug:"Presidental",
                                                        type:"Presidental",
                                                        price:200,
                                                        size:250,
                                                        capacity:1,
                                                        pets:false,
                                                        breakfast:false,
                                                        featured:true,
                                                        description:"Street an ",
                                                        extra:[
                                                            "Full Sized,pH-balanced toiletries",
                        "complientary refreshments",
                        "Adequate safety/security",
                        "Internet",
                        "Confortable beds",
                                                        ],
                                                        images:[
                                                            {
                                                            fields:{
                                                                file:{
                                                                    url:Img1,
                                                                }
                                                            }
                                                
                                                        },{    
                                                           fields:{
                                                                    file:{
                                                                        url:Room1,
                                                                    }
                                                                }
                                                    
                                                            },{    
                                                                fields:{
                                                                         file:{
                                                                             url:Room2,
                                                                         }
                                                                     }
                                                         
                                                                 }
                                                        
                                                    ],
                                                    }
                                                    },

];