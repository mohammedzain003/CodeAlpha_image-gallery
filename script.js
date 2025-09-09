var tl=gsap.timeline()
tl.from("#welcome h1", {
opacity:0,
duration:1,
delay:1,
y:-20,
color:"black"
})
tl.to("#mainContent h2",{
opacity:0,
duration:1,
delay:1,
y:-20,
repeat:-1,
yoyo:true
})
tl.to(".row gallery g-4",{
opacity:0,
duration:1,
delay:1,
y:-20,
repeat:-1,
yoyo:true
})