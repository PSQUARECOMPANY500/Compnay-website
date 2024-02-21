// locomotive allow gsap to run
function init() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

init();


gsap.set(".page2 .overlay .first", { display: 'none' })

gsap.set(".page2 .overlay .second", { opacity: 0 })
gsap.set(".page2 .overlay .third ", { display: 'none' })
// animation nav contact nd psquare company opcatiy
// timeline for opactiy 0 to 1 and 1 to 0 of contact and psquare company
const navTimeline = gsap.timeline();
navTimeline.to(".nav .pc", {
  display: 'none',
  scrollTrigger: {
    scrub: true,
    trigger: ".nav",
    scroller: "#main",
    start: '10% top',
    end: 'top -10%',

  }
})
  .to(".nav .contact", {
    display: 'initial',
    scrollTrigger: {
      scrub: true,
      trigger: ".nav",
      scroller: "#main",
      start: '150% top',
      end: 'top top',

    }
  }, "-=2").to(".nav .contact", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: "49300% top",
      end: "49300% -50%",
   

    }
  })
  .to(".nav img", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: "49300% top",
      end: "49300% -50%",

    }
  }).to(".nav .com", {
    opacity: 1,
    scrollTrigger: {
      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: "49300% top",
      end: "49300% -100%",

    }
  })
navTimeline.play();

//animation nav box shadow

gsap.to(".nav", {
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.75)",
  scrollTrigger: {
    scrub: 1,
    trigger: ".nav",
    scroller: "#main",
   start:'top top',
   end:'100% top',

  }
})






//PIN success animation
//animation hero h2 pin true

gsap.to(".hero h2", {
  textShadow: "0px 3px 12px #00000080",
  color: "#FAF2FF",
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    pin: true,
    trigger: ".hero h2",
    scroller: "#main",
    scrub: true,
    start: "13% 53%",
    end: "-6% top",

  },
});

// ---------------------------HERO H1 OR P2H1----------------------------------------------------------------------------------------------------------------------


gsap.to(".hero h1", {
  textShadow: "0px 3px 12px #00000080",
  color: "#FAF2FF",
  top: "121%",
  scrollTrigger: {
    trigger: ".hero h1",
    scroller: "#main",
    scrub: true,
    start: "1% 34%",
    end: "top -208%"
  },
})


// animatiom page2 h1
var p22 = gsap.timeline()
// // THIS ONE
p22.to(".page2 .overlay .p2h1", {
  top: "28%",
  fontFamily: "'montserrat', 'sans-serif'",
  fontStyle: "normal",
  scrollTrigger: {
    trigger: ".hero h1",
    scroller: "#main",
    scrub: true,
    start: "1% 34%",
    end: "top -192%",



  },
})
  .to(".page2 .overlay .p2h1", {
    fontWeight: 300,
    left: '10%',
    fontSize: '3.5vw',
    scrollTrigger: {
      trigger: ".hero h2",
      scroller: "#main",
      scrub: true,
      start: "320% top",
      end: "200% -30%",
    }

  })
  .to(".page2 .overlay .p2h1", {
    display: 'none',
    scrollTrigger: {
      trigger: ".bottom-text h2",
      scroller: "#main",
      scrub: true,
      start: '10% top',
      end: 'top -10%',

    }

  })



// ----------------------------------------p2h1 end------------------------------------------
// -------------------------------------------------------------------------------------------first start-------------------------------------------------------------------------

const firstt1 = gsap.timeline();

firstt1.to(".page2 .overlay .first", {
  display: 'initial',
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: true,
    start: '80% top',
    end: 'top -10%',

  }
})

  .to(".page2 .overlay .first", {
    top: '50%',
    scrollTrigger: {
      trigger: ".bottom-text h2",
      scroller: "#main",
      scrub: 1,
      start: '880% top',
      end: 'top -200%',
   
  

    }
  })
  .to(".page2 .overlay .first", {
    scale: '2',
    left: '37%',
    fontFamily: "'montserrat', 'sans-serif'",
    fontWeight: '700',
    fontStyle: 'normal',
    scrollTrigger: {
      trigger: ".bottom-text h2",
      scroller: "#main",
      scrub: 1,
      start: '1500% top',
      end: 'top -80%',
  
    }
  })
  .to(".page2 .overlay .first", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".bottom-text h2",
      scroller: "#main",
      scrub: true,
      start: '1600% top',
   

    }
  })









var p2s = gsap.timeline();

p2s.to(".page2 .overlay .second", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: true,
    start: '1600% top',
 

  }
})
  p2s.to(".page2 .overlay .second", {
    top: '28%',
    scrollTrigger: {
      trigger: ".page2 .overlay .second",
      scroller: "#main",
      scrub: true,
      start: "1700% top",
      end: "1700% -30%",

    }
  })
  .to(".page2 .overlay .second", {
    fontWeight: 300,
    left: '10%',
    fontSize: '3.5vw',
    letterSpacing: '2px',
    scrollTrigger: {
      trigger: ".page2 .overlay .second",
      scroller: "#main",
      scrub: true,
      start: "3000% top",
      end: "3000% -50%",

    }
  }
  )
  .to(".page2 .overlay .second", {
    display: 'none',
    scrollTrigger: {
      trigger: ".page2 .overlay .second",
      scroller: "#main",
      scrub: true,
      start: "3400% top",
  

    }
  }
  )

// .to(".page2 .overlay .second", {
//  opacity:0,
//     scrollTrigger: {
//       trigger: ".page2 .overlay .second",
//       scroller: "#main",
//       scrub: true,
//       start: "15300% top",
//       end: "15300% -80%",
//     }
//   })

//   .to(".page2 .overlay .third", {
//    display:'initial',
//     scrollTrigger: {
//       trigger: ".page2 .overlay .second",
//       scroller: "#main",
//       scrub: true,
//       start: "15000% top",
//       end: "15000% -80%",


//     }
//   })

// -------------------------------------------------------------------------------------------first end---------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------animation on third h1 start-------------------------------------------------------------------------------------------------------------------

var third = gsap.timeline();

third.to(".page2 .overlay .third", {
  top: '52%',
  scrollTrigger: {
    trigger: ".page2 .overlay .third",
    scroller: "#main",
    scrub: true,
    start: "47000% top",
    end: "47000% -30%",
  

  }
})

  .to(".page2 .overlay .third", {
    left: '20%',
    scale: '1.5',
    fontWeight: '700',
    scrollTrigger: {
      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: "48000% top",
      end: "48000% -20%",
     


    }
  })

  .to(".page2 .overlay .thirdspan", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: "48200% top",
      end: "48200% -120%",

    }

  })

// --------------------------------------------------gsap four animation--------------
var fr = gsap.timeline();
fr.to(".page2 .overlay .four", {
  display: 'initial',
  scrollTrigger: {
    trigger: ".page2 .overlay .second",
    scroller: "#main",
    scrub: true,
    start: "3400% top",


  }
}
)
.to(".page2 .overlay .four", {
  top: '52%',
  scrollTrigger: {
    trigger: ".page2 .overlay .second",
    scroller: "#main",
    scrub: true,
    start: "10500% top",
    end: "10500% -405%",



  }
}
)
  .to(".page2 .overlay .four", {
    scale: '2',
    left: '37%',
    fontFamily: "'montserrat', 'sans-serif'",
    fontWeight: '700',
  
    scrollTrigger: {
      trigger: ".page2 .overlay .second",
      scroller: "#main",
      scrub: true,
      start: "12600% top",
      end: "12600% -20%",



    }
  }
  )

.to(".page2 .overlay .four", {
    opacity: 0,
  
    scrollTrigger: {
      trigger: ".page2 .overlay .second",
      scroller: "#main",
      scrub: true,
      start: '12750% top',
 
    }
  }
  )



// ----------------------------------five gsap animation------------------------

var fv=gsap.timeline();
fv.to(".page2 .overlay .five", {
  display: 'initial',
  scrollTrigger: {
    trigger: ".page2 .overlay .second",
    scroller: "#main",
    scrub: true,
    start: '12750% top',

  }
}
)
.to(".page2 .overlay .five", {
  top:'28%',
  scrollTrigger: {
    trigger: ".page2 .overlay .five",
    scroller: "#main",
    scrub: true,
    start: '13300% top',
    end:'13300% -30%',


  }
}
)
.to(".page2 .overlay .five", {
  fontWeight: 300,
  left: '10%',
  fontSize: '3.5vw',
  letterSpacing: '2px',
  scrollTrigger: {
    trigger: ".page2 .overlay .five",
    scroller: "#main",
    scrub: true,
    start: '14400% top',
    end:'14400% -35%',

  }
}
)

.to(".page2 .overlay .five", {
 opacity:0,
  scrollTrigger: {
    trigger: ".page2 .overlay .four",
    scroller: "#main",
    scrub: true,
    start: '43000% top',


  }
}
)

.to(".page2 .overlay .third", {
  display:'initial',
   scrollTrigger: {
    trigger: ".page2 .overlay .four",
    scroller: "#main",
    scrub: true,
    start: '43000% top',

   }
 }
 )

var page2Animations = [
  { element: ".page2 .overlay .yrs1", start: '49000% top', end: '49000% -30%' },
  { element: ".page2 .overlay .yrs2", start: '49030% top', end: '49030% -30%' },
  { element: ".page2 .overlay .yrs3", start: '49060% top', end: '49060% -30%' },
  { element: ".page2 .overlay .yrs4", start: '49090% top', end: '49090% -30%' },
  { element: ".page2 .overlay .yrs5", start: '49120% top', end: '49120% -30%' },
  { element: ".page2 .overlay .yrs6", start: '49150% top', end: '49150% -30%' },
  { element: ".page2 .overlay .yrs7", start: '49180% top', end: '49180% -30%' },
  { element: ".page2 .overlay .yrs8", start: '49210% top', end: '49210% -30%' },
  { element: ".page2 .overlay .yrs9", start: '49240% top', end: '49240% -30%' },
  { element: ".page2 .overlay .yrs10", start: '49270% top', end: '49270% -30%' },
  { element: ".page2 .overlay .yrs11", start: '49300% top', end: '49300% -30%' },
  { element: ".page2 .overlay .yrs12", start: '49330% top', end: '49330% -30%' }
];

page2Animations.forEach(function (animation) {
  gsap.to(animation.element, {
    opacity: 1,
    transform: 'translateX(0vw)',
    scrollTrigger: {
      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: animation.start,
      end: animation.end
    }
  });
});
//-------------------------------------------------------------db start--------------------------------------------------------------------------------
gsap.to(".page2 .db h3 .one1", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".page2 .db h3",
    scroller: "#main",
    scrub: 1,
    start: "140% 50%",
    end: "top -15%",


  },
})

gsap.to(".page2 .db h3 .two2", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  delay: 2,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".page2 .db h3",
    scroller: "#main",
    scrub: 1,
    start: "172% 50%",
    end: "top -15%",

  },
})

gsap.to(".page2 .db h3 .three3", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".page2 .db h3",
    scroller: "#main",
    scrub: 1,
    start: "204% 50%",
    end: "top -15%",
  },
})


gsap.to(".page2 .db h3 .four4", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".page2 .db h3",
    scroller: "#main",
    scrub: 1,
    start: "236% 50%",
    end: "top -15%",
  },
})



gsap.to(".page2 .db h3 .five5", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".page2 .db h3",
    scroller: "#main",
    scrub: 1,
    start: "268% 50%",
    end: "top -15%",
  },
})

gsap.to(".page2 .db h3 .six6", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".page2 .db h3",
    scroller: "#main",
    scrub: 1,
    start: "300% 50%",
    end: "top -15%",
  },
})



gsap.to(".page2 .db h3 .seven7", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".page2 .db h3",
    scroller: "#main",
    scrub: 1,
    start: "332% 50%",
    end: "top -15%",
  },
})


gsap.to(".page2 .db h3 .eight8", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".page2 .db h3",
    scroller: "#main",
    scrub: 1,
    start: "364% 50%",
    end: "top -15%",
  },
})



gsap.to(".page2 .db h3 .nine9", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".page2 .db h3",
    scroller: "#main",
    scrub: 1,
    start: "396% 50%",
    end: "top -15%",
  },
})



gsap.to(".page2 .db h3 .ten10", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".page2 .db h3",
    scroller: "#main",
    scrub: 1,
    start: "428% 50%",
    end: "top -15%",
  },
})


gsap.to(".page2 .db h3 .eleven11", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".page2 .db h3",
    scroller: "#main",
    scrub: 1,
    start: "460% 50%",
    end: "top -15%",
  },
})



gsap.to(".page2 .db h3 .tw12", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".page2 .db h3",
    scroller: "#main",
    scrub: 1,
    start: "492% 50%",
    end: "top -15%",
  },
})
// ---------------------------------------------animation db end---------------------------------------------------------------------------------------------------------------





// ----------------------------------------------------------------------------------------------------------------------bottom text start---------------------------------------------------------------------
gsap.to(".bottom-text h2 .one", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: "top 28%",
    end: "top -15%",



  },
})


gsap.to(".bottom-text h2 .two", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: "20% 28%",
    end: "top -15%",

  },
})


gsap.to(".bottom-text h2 .three", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: "40% 28%",
    end: "top -15%",



  },
})



gsap.to(".bottom-text h2 .fourr", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: "60% 28%",
    end: "top -15%",

  },
})


gsap.to(".bottom-text h2 .fivee", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: "80% 28%",
    end: "top -15%",


  },
})


gsap.to(".bottom-text h2 .six", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: "100% 28%",
    end: "top -15%",


  },
})

gsap.to(".bottom-text h2 .seven", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: "120% 28%",
    end: "top -15%",

  },
})

gsap.to(".bottom-text h2 .eight", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: "140% 28%",
    end: "top -15%",


  },
})


gsap.to(".bottom-text h2 .nine", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: "160% 28%",
    end: "top -15%",
  },
})


gsap.to(".bottom-text h2 .ten", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: "180% 28%",
    end: "top -15%",

  },
})


gsap.to(".bottom-text h2 .eleven", {
  transform: "translateX(0vw)",
  duration: 10,
  opacity: 1,
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: "200% 28%",
    end: "top -15%",

  },
})

//--------------------------------------------------------------------------------------------------------------------------bottom text end---------------------------------------------------------------------------------------------------------------------------------




//------------------------------------------------------------------------------------------------------------------------move to top  botto-text animation----------------------------------------------------------------

const t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".bottom-text h2",
    scroller: "#main",
    scrub: 1,
    start: '880% top',
    end: 'top -150%',



  },
});

t3.to(".bottom-text h2", {
  opacity: 0,
  top: '20%'
})



const t4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".db h3",
    scroller: "#main",
    scrub: 1,
    start: '758% top',
    end: 'top -155%',



  },
});

t4.to(".db h3", {
  opacity: 0,
  duration: 12,
  top: '30%',
})

// --------------------------------------end move to top--------------------------------------------------












// ----------overlay pin true--------------------------------------------------------------------------
gsap.to(".overlay", {
  scrollTrigger: {
    trigger: ".overlay",
    scroller: "#main",
    scrub: true,
    start: "1vh 1vh",
    end: "3000vh -800000vh",
    pin: true,
  },
});
// ------------------------end overlay pin true-----------------------------------------------------


// ---------------------------------------------th animation start-------------------------------------


// var th = gsap.timeline();

var th = gsap.timeline();

var animations = [
  { element: ".th h5 .thone", start: '2700% top', end: '2700% -30%' },
  { element: ".th h5 .thtwo", start: '2750% top', end: '2750% -30%' },
  { element: ".th h5 .ththree", start: '2800% top', end: '2800% -30%' },
  { element: ".th h5 .thfour", start: '2850% top', end: '2850% -30%' },
  { element: ".th h5 .thfive", start: '2900% top', end: '2900% -30%' },
  { element: ".th h5 .thsix", start: '2950% top', end: '2950% -30%' },
  { element: ".th h5 .thseven", start: '3000% top', end: '3000% -30%' }
];

animations.forEach(animation => {
  th.to(animation.element, {
    transform: "translateX(0)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".th h5",
      scroller: "#main",
      scrub: true,
      start: animation.start,
      end: animation.end,

    }
  });
});




var th1 = gsap.timeline();

th1.to(".th h5", {
  top: '21.5%',
  scale: 0.4,
  ease: "sine.out",
  left:'22%',
  letterSpacing:'3px',
  scrollTrigger: {
    trigger: ".th h5",
    scroller: "#main",
    scrub: true,
    start: '3600% top',
    end: '3600% -30%',
  },
  // onComplete: function () {
  //   gsap.to(".th h5", {
  //     top: '19%',
  //     scrollTrigger: {
  //       trigger: ".th h5",
  //       scroller: "#main",
  //       scrub: true,
  //       start: '100% top',
  //       end: '100% -400%'
  //     }
  //   });
  // }
})


gsap.to(".th h5", {
  transform: "translate(0%,-50%)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".th h5",
    scroller: "#main",
    scrub: true,
    start: "8200% top",
    end: "8200% -50%",

  }
})







// ------------------------------------------------th animation end--------------------------------------



// -----------------------------------------------------------etu anumatuon start--------------------------
var etu = gsap.timeline();

var animations = [
  { element: ".etu h5 .etuone", start: '3600% top', end: '3600% -30%' },
  { element: ".etu h5 .etutwo", start: '3630% top', end: '3630% -30%' },
  { element: ".etu h5 .etuthree", start: '3660% top', end: '3660% -30%' },
  { element: ".etu h5 .etufour", start: '3690% top', end: '3690% -30%' },
  { element: ".etu h5 .etufive", start: '3720% top', end: '3720% -30%' },
  { element: ".etu h5 .etusix", start: '3750% top', end: '3750% -30%' },
  { element: ".etu h5 .etuseven", start: '3780% top', end: '3780% -30%' },
  { element: ".etu h5 .etueight", start: '3810% top', end: '3810% -30%' },
  { element: ".etu h5 .etunine", start: '3840% top', end: '3840% -30%' }
];

animations.forEach(animation => {
  etu.to(animation.element, {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".etu h5",
      scroller: "#main",
      scrub: 1,
      start: animation.start,
      end: animation.end
    }
  });
});





var etu1 = gsap.timeline();
etu1.to(".etu h5", {
  top: '30%',
  scale: 0.4,
  left: '18.2%',
  fontWeight: '300',
  letterSpacing:'3px',
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".etu h5",
    scroller: "#main",
    scrub: true,
    start: '4440% top',
    end: '4440% -20%',

  }


})



gsap.to(".etu h5", {
  transform: "translate(0%,-80%)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".th h5",
    scroller: "#main",
    scrub: true,
    start: "8200% top",
    end: "8200% -80%",

  }
})


// -------------------------------bsp start animation-------------------------------------------------------------------------------

var bsp = gsap.timeline();

var bspAnimations = [
  { element: ".bsp h5 .bspone", start: '4440% top', end: '4440% -30%' },
  { element: ".bsp h5 .bsptwo", start: '4470% top', end: '4470% -30%' },
  { element: ".bsp h5 .bspthree", start: '4500% top', end: '4500% -30%' },
  { element: ".bsp h5 .bspfour", start: '4530% top', end: '4530% -30%' },
  { element: ".bsp h5 .bspfive", start: '4560% top', end: '4560% -30%' },
  { element: ".bsp h5 .bspsix", start: '4590% top', end: '4590% -30%' },
  { element: ".bsp h5 .bspseven", start: '4620% top', end: '4620% -30%' }
];

bspAnimations.forEach(animation => {
  bsp.to(animation.element, {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".bsp h5",
      scroller: "#main",
      scrub: 1,
      start: animation.start,
      end: animation.end
    }
  });
});

bsp.to(".bsp h5", {
  top: '40%',
  scale: 0.6,
  fontWeight: 600,
  left: '27.2%',
  letterSpacing:'3px',
  // transform: 'translateX(60%)',
  ease: "sine.out",
  scrollTrigger: {
    trigger: ".bsp h5",
    scroller: "#main",
    scrub: true,
    start: '5420% top',
    end: '5420% -30%',

  }
});


gsap.to(".bsp h5", {
  transform: "translate(0%,-135%)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".th h5",
    scroller: "#main",
    scrub: true,
    start: "8200% top",
    end: "8200% -155%",

  }
})

// // ----------------------------------------------------bsp animation end-----------------------------------------------------------------------------

//-----------------------------------------elf animation start------------------------------------------------------------------


var elf = gsap.timeline();

var elfAnimations = [
  { element: ".elf h5 .elf1", start: '7820% top', end: '7820% -30%' },
  { element: ".elf h5 .elf2", start: '7850% top', end: '7850% -30%' },
  { element: ".elf h5 .elf3", start: '7880% top', end: '7880% -30%' },
  { element: ".elf h5 .elf4", start: '7910% top', end: '7910% -30%' },
  { element: ".elf h5 .elf5", start: '7940% top', end: '7940% -30%' },
  { element: ".elf h5 .elf6", start: '7970% top', end: '7970% -30%' },
  { element: ".elf h5 .elf7", start: '8000% top', end: '8000% -30%' },
  { element: ".elf h5 .elf8", start: '8030% top', end: '8030% -30%' },
  { element: ".elf h5 .elf9", start: '8060% top', end: '8060% -30%' },
  { element: ".elf h5 .elf10", start: '8090% top', end: '8090% -30%' },
  { element: ".elf h5 .elf11", start: '8120% top', end: '8120% -30%' },
  { element: ".elf h5 .elf12", start: '8150% top', end: '8150% -30%' },
  { element: ".elf h5 .elf13", start: '8180% top', end: '8180% -30%' },
  { element: ".elf h5 .elf14", start: '8210% top', end: '8210% -30%' },
  { element: ".elf h5 .elf15", start: '8240% top', end: '8240% -30%' },
  { element: ".elf h5 .elf16", start: '8270% top', end: '8270% -30%' }
];

elfAnimations.forEach(animation => {
  elf.to(animation.element, {
    transform: "translateX(0vw)",
    duration: 10,
    opacity: 1,
    scrollTrigger: {
      trigger: ".elf h5",
      scroller: "#main",
      scrub: 1,
      start: animation.start,
      end: animation.end
    }
  });
});

elf.to(".elf h5", {
  top: '54%',
  // transform: 'translateX(32.3%)',
  left: '22.5%',
  scale: 0.6,
  duration: 10,
  fontWeight: 400,
  letterSpacing:'3px',
  scrollTrigger: {
    trigger: ".elf h5",
    scroller: "#main",
    scrub: true,
    start: '9270% top',
    end: '9270% -30%',

  },
  // onComplete: function () {
  //   gsap.to('.elf h5', {
  //     top: '46%',
  //     scrollTrigger: {
  //       trigger: ".elf h5",
  //       scroller: "#main",
  //       scrub: true,
  //       start: '100% top',
  //       end: '100% -100%',
  //     }
  //   })
  // }
});

gsap.to(".elf h5", {
  transform: "translate(0%,-260%)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".th h5",
    scroller: "#main",
    scrub: true,
    start: "8200% top",
    end: "8200% -215%",


  }
});

// -----------------------------------------------------bns animation start-------------------------------------------------------------------------
var bns = gsap.timeline();
var bnsAnimations = [
  { element: ".bns h5 .bns1", start: '9200% top', end: '9200% -30%' },
  { element: ".bns h5 .bns2", start: '9230% top', end: '9230% -30%' },
  { element: ".bns h5 .bns3", start: '9260% top', end: '9260% -30%' },
  { element: ".bns h5 .bns4", start: '9290% top', end: '9290% -30%' },
  { element: ".bns h5 .bns5", start: '9320% top', end: '9320% -30%' },
  { element: ".bns h5 .bns6", start: '9350% top', end: '9350% -30%' },
  { element: ".bns h5 .bns7", start: '9380% top', end: '9380% -30%' },
  { element: ".bns h5 .bns8", start: '9410% top', end: '9410% -30%' },
  { element: ".sw1", start: '9470% top', end: '9470% -30%' },
  { element: ".sw2", start: '9500% top', end: '9500% -30%' },
  { element: ".sw3", start: '9530% top', end: '9530% -30%' },
  { element: ".sw4", start: '9560% top', end: '9560% -30%' },
  { element: ".sw5", start: '9590% top', end: '9590% -30%' },
  { element: ".sw6", start: '9620% top', end: '9620% -30%' },
  { element: ".sw7", start: '9650% top', end: '9650% -30%' },
  { element: ".sw8", start: '9680% top', end: '9680% -30%' },
  { element: ".sw9", start: '9710% top', end: '9710% -30%' }
];


bnsAnimations.forEach(animation => {
  bns.to(animation.element, {
    transform: "translateX(0vw)",
    opacity: 1,
    scrollTrigger: {
      trigger: ".bns h5",
      scroller: "#main",
      scrub: 1,
      start: animation.start,
      end: animation.end
    }
  });
});

bns.to(".bns h5", {
  top: '64%',
  scale: '0.7',
  // left: '36.7%',
  letterSpacing:'3px',
  left:'25%',
  scrollTrigger: {
    trigger: ".bns h5",
    scroller: "#main",
    scrub: 1,
    start: '10900% top',
    end: '10900% 100%'
  }
});

gsap.to(".bns h5", {
  transform: "translate(0%,-330%)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".th h5",
    scroller: "#main",
    scrub: true,
    start: "8200% top",
    end: "8200% -300%",
  }
});

// ------------------------------------bns animation end------------------------------------------------------------------------------------------------------------



// -----------------------------------------------cm animation start------------------------------------------------------------------------------------
var cmAnimations = [
  { element: ".cm h5 .cm1", start: '17500% top', end: '17500% -50%' },
  { element: ".cm h5 .cm2", start: '17530% top', end: '17530% -50%' },
  { element: ".cm h5 .cm3", start: '17560% top', end: '17560% -50%' },
  { element: ".cm h5 .cm4", start: '17590% top', end: '17590% -50%' },
  { element: ".cm h5 .cm5", start: '17620% top', end: '17620% -50%' },
  { element: ".cm h5 .cm6", start: '17650% top', end: '17650% -50%' },
  { element: ".cm h5 .cm7", start: '17680% top', end: '17680% -50%' },
  { element: ".cm h5 .cm8", start: '17710% top', end: '17710% -50%' },
  { element: ".cm h5 .cm9", start: '17740% top', end: '17740% -50%' },
  { element: ".cm h5 .cm10", start: '17770% top', end: '17770% -50%' },
  { element: ".cm h5 .cm11", start: '17800% top', end: '17800% -50%' },
  { element: ".cm h5 .cm12", start: '17830% top', end: '17830% -50%' },
  { element: ".cm h5 .cm13", start: '17860% top', end: '17860% -50%' }
];

var cm = gsap.timeline();

cmAnimations.forEach(function (animation) {
  cm.to(animation.element, {
    transform: "translateX(0vw)",
    opacity: 1,
    scrollTrigger: {
      trigger: ".cm h5",
      scroller: "#main",
      scrub: true,
      start: animation.start,
      end: animation.end,

    },
  });
});

cm.to(".cm h5", {
  top: '24.7%',
  scale: 0.6,
  left: '26%',
  scrollTrigger: {
    trigger: ".cm h5",
    scroller: "#main",
    scrub: true,
    start: "18900% top",
    end: "18900% -10%",

  },
})

  .to(".cm h5", {
    transform: "translate(0%,-60%)",
    opacity: 0,
    scrollTrigger: {
      trigger: ".cm h5",
      scroller: "#main",
      scrub: true,
      start: "20100% top",
    end: "20100% -10%",
    },
  });




// // ------------------------------------cmp animation----------------------------------
var cmp = gsap.timeline()
cmp.to(".cm p", {
  top: '42%',
  opacity: 1,
  scrollTrigger: {
    trigger: ".cm h5",
    scroller: "#main",
    scrub: true,
    start: "18900% top",
    end: "18900% -10%",
  },
})
  

.to(".cm .cmp", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".cm h5",
      scroller: "#main",
      scrub: true,
      start: "20100% top",
    end: "20100% -10%",
    },
  })


//-------------------------------.inp animation start------------------------
var inp = gsap.timeline()
inp.to(".in h5", {
  top: '28%',
  opacity: 1,
  scrollTrigger: {
    trigger: ".in h5",
    scroller: "#main",
    scrub: true,
    start: "35000% top",
    end: "35000% -15%",
  

  },
})

.to(".in p", {
    top: '42%',
    opacity: 1,
    scrollTrigger: {
      trigger: ".in h5",
      scroller: "#main",
      scrub: true,
      start: "35000% top",
      end: "35000% -15%",
    

    },
  })
  .to(".in h5", {
    transform: "translate(0%,-100%)",
    scrollTrigger: {
      trigger: ".in h5",
      scroller: "#main",
      scrub: 1,
      start: "36900% top",
      end: "36900% -20%",
    

    },
  })

  .to(".in .inh", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".in h5",
      scroller: "#main",
      scrub: true,
      start: "36900% top",
      end: "36900% -20%",
    },
  })

  .to(".in .inp", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".in h5",
      scroller: "#main",
      scrub: true,
      start: "36900% top",
      end: "36900% -20%",

    },
  })


// //----------------------------------------------------------------------------------------------animation sc start---------------------------------------------------------------var inp=gsap.timeline()
var scp = gsap.timeline();
scp.to(".sc h5", {
  top: '28%',
  opacity: 1,
  scrollTrigger: {
    trigger: ".in h5",
    scroller: "#main",
    scrub: true,
    start: "36900% top",
    end: "36900% -20%",
  

  },
})
  .to(".sc p", {
    top: '42%',
    opacity: 1,
    scrollTrigger: {
      trigger: ".in h5",
      scroller: "#main",
      scrub: true,
      start: "36900% top",
      end: "36900% -20%",

    },
  })

  .to(".sc h5", {
    transform: "translate(0%,-60%)",

    scrollTrigger: {
      trigger: ".sc h5",
      scroller: "#main",
      scrub: true,
      start: "39100% top",
      end: "39100% -20%",

    },
  })
  .to(".sc .sch", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".sc h5",
      scroller: "#main",
      scrub: true,
      start: "39100% top",
      end: "39100% -20%",

    },
  })
  .to(".sc .scp", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".sc h5",
      scroller: "#main",
      scrub: true,
      start: "39100% top",
      end: "39100% -20%",
    },
  })


//  -------------------------ing animation start--------------------------------------------------------------------------------------------------------------------


var ing = gsap.timeline();
ing.to(".ing h5", {
  top: '28%',
  opacity: 1,
  scrollTrigger: {
    trigger: ".ing h5",
    scroller: "#main",
    scrub: true,
    start: "39450% top",
    end: "39450% -20%",

  },
})
  .to(".ing p", {
    top: '42%',
    opacity: 1,
    scrollTrigger: {
      trigger: ".ing h5",
      scroller: "#main",
      scrub: true,
      start: "39450% top",
      end: "39450% -20%",
  


    },
  })
  .to(".ing h5", {
    transform: "translate(0%,-60%)",
    scrollTrigger: {
      trigger: ".ing h5",
      scroller: "#main",
      scrub: true,
      start: "41600% top",
      end: "41600% -20%",

    },
  })
  .to(".ing .ingh", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".ing h5",
      scroller: "#main",
      scrub: true,
      start: "41600% top",
      end: "41600% -20%",

    },
  })
  .to(".ing .ingp", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".ing h5",
      scroller: "#main",
      scrub: true,
      start: "41600% top",
      end: "41600% -20%",

    },
  })

// //  ---------------------------------------------------------------------------imp animation start -----------------------------------------------------



var imp = gsap.timeline();
imp.to(".imp h5", {
  top: '28%',
  opacity: 1,
  scrollTrigger: {
    trigger: ".imp h5",
    scroller: "#main",
    scrub: true,
    start: "41600% top",
    end: "41600% -20%",
 
  },
})
  .to(".imp p", {
    top: '42%',
    opacity: 1,
    scrollTrigger: {
      trigger: ".imp h5",
      scroller: "#main",
      scrub: true,
      start: "41600% top",
      end: "41600% -20%",


    },
  })
  .to(".imp h5", {
    transform: "translate(0%,-50%)",

    scrollTrigger: {
      trigger: ".imp h5",
      scroller: "#main",
      scrub: true,
      start: "43800% top",
      end: "43800% -20%",
    

    },
  })
  .to(".imp .imph", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".imp h5",
      scroller: "#main",
      scrub: true,
      start: "43800% top",
      end: "43800% -20%",
   

    },
  })
  .to(".imp .impp", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".imp h5",
      scroller: "#main",
      scrub: true,
      start: "43800% top",
      end: "43800% -20%",

    },
  })

// //------------------------------------------------------------------------------------------------tr animation start-------------------------------------------------------- 

var trp = gsap.timeline();

trp.to(".tr h5", {
  top: '28%',
  opacity: 1,
  scrollTrigger: {
    trigger: ".imp h5",
    scroller: "#main",
    scrub: true,
    start: "43800% top",
    end: "43800% -20%",



  },
})
  .to(".tr p", {
    top: '42%',
    opacity: 1,
    scrollTrigger: {
      trigger: ".tr h5",
      scroller: "#main",
      scrub: true,
      start: "43800% top",
      end: "43800% -20%",
  



    },
  })
  .to(".tr h5", {
    transform: "translate(0%,-100%)",

    scrollTrigger: {
      trigger: ".tr h5",
      scroller: "#main",
      scrub: true,
      start: "46000% top",
      end: "46000% -20%",
  


    },
  })
  .to(".tr .trh", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".tr h5",
      scroller: "#main",
      scrub: true,
      start: "46000% top",
      end: "46000% -20%",
    },
  })
  .to(".tr .trp", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".tr h5",
      scroller: "#main",
      scrub: true,
      start: "46000% top",
      end: "46000% -20%",
    },
  })


  .to(".page2 .overlay .lastsim", {
    // opacity: 1,
    // transform: 'translate(0,-200%)',
    top: '-27%',
    color: '#fff',

    // background: "transparent linear-gradient(197deg, #ECE7E100 0%, #82638F57 35%, #330152 100%) 0% 0% no-repeat padding-box",
    scrollTrigger: {
      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: "50900% top",
      end: "50900% -50%",


    }
  })

.to(".page2 .overlay .third", {


    color: '#fff',
    scrollTrigger: {
      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: "50900% top",
      end: "50900% -50%",

    }
  })
  .to(".page2 .overlay .yrs", {
    // opacity: 1,
    top: '22%',
    color: '#fff',


    // background: "transparent linear-gradient(197deg, #ECE7E100 0%, #82638F57 35%, #330152 100%) 0% 0% no-repeat padding-box",
    scrollTrigger: {
      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: "50900% top",
      end: "50900% -50%",

    }
  })
  .to(".page2 #overlay2 ", {
    opacity: 1,
    scrollTrigger: {
      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: "50900% top",
      end: "50900% -50%",

    }
  })
  .to(".frm .frmr", {
    opacity: 1,
    transform: 'translateY(0%)',
    scrollTrigger: {
      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: "50900% top",
      end: "50900% -50%",


    },
  })
  .to(".frm .frml", {
    opacity: 1,
    transform: 'translateY(0%)',
    scrollTrigger: {

      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: "50900% top",
      end: "50900% -50%",
    },
  })

  .to(".p3btm", {
    opacity: 1,
    bottom: '0',
    scrollTrigger: {
      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: "50900% top",
      end: "50900% -50%",
    },
  })
  .to(".frm button", {
  opacity:1,

    scrollTrigger: {
      trigger: ".page2 .overlay .third",
      scroller: "#main",
      scrub: true,
      start: "50900% top",
      end: "50900% -30%",
    },
  })



var close=document.querySelector("#close");
close.addEventListener("click",()=>{
 document.querySelector(".conoverlay").style.display='none'
})


var pc=document.querySelector('.pc')

pc.addEventListener("click",()=>{
  document.querySelector(".conoverlay").style.display='flex'
 })
 

 var contact=document.querySelector('.contact')

contact.addEventListener("click",()=>{
  document.querySelector(".conoverlay").style.display='flex'
 })