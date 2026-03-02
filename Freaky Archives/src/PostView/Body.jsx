export default function Body() {
    const tempContent =
    `
    This was a long time ago. I'd been police for two years. I wasn't even with the Met back then. I was based up in Lancashire with a road policing unit. This is before the Highways Agency took most of the grunt work, so there was plenty to do. None of it much fun, but it needed doing. Booking drunk drivers were my favorite. I always hoped they'd refuse the breathalyzer, maybe even took a swing at me. Nothing funnier than a drunk asshole trying to avoid being arrested.
    <br></br>
    I usually rode with Isaac Masters. He'd been working with the RPU a lot longer than I had, and was even harsher than me. I know why, though. He tried to be a good police, give everyone a fair shot, but you see a lot of accidents, not much worse in the world than a really bad car crash. It gets to you. You get hard on people who don't respect the road, and there are plenty of them out there.
    It was raining that night, that heavy, thumping rain that means you can't hear a damn thing. It crashes onto the roof like someone's jumpin' on it. Me and Zack was sitting in a lay-by, watching traffic and trying to drink coffee. We'd picked it up from a service station a few miles back, but it was one of those open-topped styrofoam cups. By the time we'd got back to the car, the rain had got in and left us with two cups of cold sludge.
    So we were both in a pretty bad mood. It was maybe 1:00 in the afternoon, but you wouldn't have known it. The clouds weren't letting any sun through, and everything looked grey, wet and lifeless. Couldn't even talk over the sound of rain on the roof, so we just sat there in silence, drinking lukewarm sludge.
    The motorway was quieter than normal. A Wednesday afternoon doesn't see a lot of traffic, but the rain usually brings out more cars. That day it was pretty empty. Everyone seemed to be driving careful on account of the rain, which was also not normal, and I was torn. Part of me wanted to spot some idiot who I could take my bad mood out on, when the other part of me didn't want to get any wetter than I already was.
    It looked like I wasn't gonna get a choice, anyway, at least not until I saw the van. It was a beaten up old Citroën C15. There was some writing on the side, but I couldn't see it clearly through the rain. It was either very dirty, or painted a nasty shade of off-white.
    Most importantly, it was driving about 25 miles an hour. The limit is 70. There's technically no minimum speed on a motorway, but the van didn't show any signs of speeding up, and it was kind of strange. We had enough cause to stop it if we wanted. I wasn't sure whether to let it go or not, but Zack had clearly made his decision already. He was in the driving seat and fired up the lights as we drove up behind it.
    The van glided to a stop on the hard shoulder at the side of the road and sat there. The headlights, which had been turned on for the rain, died. Then it just waited.
    Zack was out first. The rain was so thick that he had to take his torch to see properly. The light passed over the van, and I could see rust creeping around the edges of the paneling.
    <br></br>
    We walked up to the driver's side. I could see dark shapes from inside, but they weren't moving. Up close, I could read the name on the side: “Breekon and Hope Deliveries.” It was covered in a thick layer of dirt that the rain couldn't quite wash off.
    `;

    return (
        <div className="flex flex-col bg-olive h-auto w-full border-border border-post items-center py-6 px-6 gap-y-4">
            <div 
                className="text-glow font-french-canon text-xxxs break-words"
                dangerouslySetInnerHTML={{ __html: tempContent }} // WARNING: THIS WILL BE VULNERABLE TO XSS ATTACKS (make smth soon to prevent these attacks from occurring)
            />
        </div>
    );
}