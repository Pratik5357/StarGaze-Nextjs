const sampleData = [
    {
      date: '2024-01-01',
      explanation: 'Galaxies are fascinating not only for what is visible, but for what is invisible. Grand spiral galaxy NGC 1232, captured in detail by one of the Very Large Telescopes, is a good example.  The visible is dominated by millions of bright stars and dark dust, caught up in a gravitational swirl of spiral arms revolving about the center. Open clusters containing bright blue stars can be seen sprinkled along these spiral arms, while dark lanes of dense interstellar dust can be seen sprinkled between them. Less visible, but detectable, are billions of dim normal stars and vast tracts of interstellar gas, together wielding such high mass that they dominate the dynamics of the inner galaxy.  Leading theories indicate that even greater amounts of matter are invisible, in a form we don\'t yet know. This pervasive dark matter is postulated, in part, to explain the motions of the visible matter in the outer regions of galaxies.    Free APOD Lecture: January 9, 2024 to the Amateur Astronomers of Association of New York',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/ngc1232b_vlt_3969.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'NGC 1232: A Grand Design Spiral Galaxy',
      url: 'https://apod.nasa.gov/apod/image/2401/ngc1232b_vlt_960.jpg'
    },
    {
      copyright: '\nSteven Madow\n',
      date: '2024-01-02',
      explanation: 'Can a rocket make the Moon ripple? No, but it can make a background moon appear wavy.  The rocket, in this case, was a SpaceX Falcon Heavy that blasted off from NASA\'s Kennedy Space Center last week. In the featured launch picture, the rocket\'s exhaust plume glows beyond its projection onto the distant, rising, and nearly full moon.  Oddly, the Moon\'s lower edge shows unusual drip-like ripples. The Moon itself, far in the distance, was really unchanged.  The physical cause of these apparent ripples was pockets of relatively hot or rarefied air deflecting moonlight less strongly than pockets of relatively cool or compressed air: refraction. Although the shot was planned, the timing of the launch had to be just right for the rocket to be transiting the Moon during this single exposure.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/FalconMoon_Madow_1710.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Rocket Transits Rippling Moon',
      url: 'https://apod.nasa.gov/apod/image/2401/FalconMoon_Madow_960.jpg'
    },
    {
      copyright: '\nTristian McDonald;\nText: Tiffany Lewis \n(Michigan Tech U.)\n',
      date: '2024-01-03',
      explanation: 'What is that unusual red halo surrounding this aurora?  It is a Stable Auroral Red (SAR) arc. SAR arcs are rare and have only been acknowledged and studied since 1954.  The featured wide-angle photograph, capturing nearly an entire SAR arc surrounding more common green and red aurora, was taken earlier this month from Poolburn, New Zealand, during an especially energetic geomagnetic storm. Why SAR arcs form remains a topic of research, but is likely related to Earth\'s protective magnetic field, a field created by molten iron flowing deep inside the Earth.  This magnetic field usually redirects incoming charged particles from the Sun\'s wind toward the Earth\'s poles. However, it also traps a ring of ions closer to the equator, where they can gain energy from the magnetosphere during high solar activity. The energetic electrons in this ion ring can collide with and excite oxygen higher in Earth\'s ionosphere than typical auroras, causing the oxygen to glow red. Ongoing research has uncovered evidence that a red SAR arc can even transform into a purple and green STEVE.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/SarArcNz_McDonald_2048.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'A SAR Arc from New Zealand',
      url: 'https://apod.nasa.gov/apod/image/2401/SarArcNz_McDonald_960.jpg'
    },
    {
      date: '2024-01-04',
      explanation: 'Like a ship plowing through cosmic seas, runaway star Zeta Ophiuchi produces the arcing interstellar bow wave or bow shock seen in this stunning infrared portrait. In the false-color view, bluish Zeta Oph, a star about 20 times more massive than the Sun, lies near the center of the frame, moving toward the left at 24 kilometers per second. Its strong stellar wind precedes it, compressing and heating the dusty interstellar material and shaping the curved shock front. What set this star in motion? Zeta Oph was likely once a member of a binary star system, its companion star was more massive and hence shorter lived. When the companion exploded as a supernova catastrophically losing mass, Zeta Oph was flung out of the system.  About 460 light-years away, Zeta Oph is 65,000 times more luminous than the Sun and would be one of the brighter stars in the sky if it weren\'t surrounded by obscuring dust. The image spans about 1.5 degrees or 12 light-years at the estimated distance of Zeta Ophiuchi. In January 2020, NASA placed the Spitzer Space Telescope in safe mode, ending its 16 successful years of exploring the cosmos.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/ZetaOph_spitzer_4015.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Zeta Oph: Runaway Star',
      url: 'https://apod.nasa.gov/apod/image/2401/ZetaOph_spitzer_960.jpg'
    },
    {
      copyright: 'Fred Zimmer',
      date: '2024-01-05',
      explanation: 'Near the center of this sharp cosmic portrait, at the heart of the Orion Nebula, are four hot, massive stars known as the Trapezium. Gathered within a region about 1.5 light-years in radius, they dominate the core of the dense Orion Nebula Star Cluster. Ultraviolet ionizing radiation from the Trapezium stars, mostly from the brightest star Theta-1 Orionis C powers the complex star forming region\'s entire visible glow. About three million years old, the Orion Nebula Cluster was even more compact in its younger years and a dynamical study indicates that runaway stellar collisions at an earlier age may have formed a black hole with more than 100 times the mass of the Sun. The presence of a black hole within the cluster could explain the observed high velocities of the Trapezium stars. The Orion Nebula\'s distance of some 1,500 light-years would make it one of the closest known black holes to planet Earth.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/Image964.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Trapezium: At the Heart of Orion',
      url: 'https://apod.nasa.gov/apod/image/2401/Image964_1024.jpg'
    },
    {
      date: '2024-01-06',
      explanation: 'You couldn\'t really be caught in this blizzard while standing by a cliff on periodic comet 67P/Churyumov-Gerasimenko. Orbiting the comet in June of 2016, the Rosetta spacecraft\'s narrow angle camera did record streaks of dust and ice particles similar to snow as they drifted across the field of view close to the camera and above the comet\'s surface. Still, some of the bright specks in the scene are likely due to a rain of energetic charged particles or cosmic rays hitting the camera, and the dense background of stars in the direction of the constellation of the Big Dog (Canis Major). In the video, the background stars are easy to spot trailing from top to bottom. The stunning movie was constructed from 33 consecutive images taken over 25 minutes while Rosetta cruised some 13 kilometers from the comet\'s nucleus. In September 2016, the nucleus became the final resting place for the Rosetta spacecraft after its mission was ended with a successful controlled impact on 67P/Churyumov-Gerasimenko.',
      media_type: 'video',
      service_version: 'v1',
      title: 'The Snows of Churyumov-Gerasimenko',
      url: 'https://www.youtube.com/embed/PpyPgJHKxSw?rel=0'
    },
    {
      date: '2024-01-07',
      explanation: 'To some it looks like a cat\'s eye. To others, perhaps like a giant cosmic conch shell.  It is actually one of the brightest and most highly detailed planetary nebula known, composed of gas expelled in the brief yet glorious phase near the end of life of a Sun-like star. This nebula\'s dying central star may have produced the outer circular concentric shells by shrugging off outer layers in a series of regular convulsions. The formation of the beautiful, complex-yet-symmetric inner structures, however, is not well understood. The featured image is a composite of a digitally sharpened Hubble Space Telescope image with X-ray light captured by the orbiting Chandra Observatory.  The exquisite floating space statue spans over half a light-year across. Of course, gazing into this Cat\'s Eye, humanity may well be seeing the fate of our sun, destined to enter its own planetary nebula phase of evolution ... in about 5 billion years.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/CatsEye_HubblePohl_1278.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'The Cat\'s Eye Nebula in Optical and X-ray',
      url: 'https://apod.nasa.gov/apod/image/2401/CatsEye_HubblePohl_960.jpg'
    },
    {
      date: '2024-01-08',
      explanation: 'Venus goes through phases.  Just like our Moon, Venus can appear as a full circular disk, a thin crescent, or anything in between.  Venus, frequently the brightest object in the post-sunset or pre-sunrise sky, appears so small, however, that it usually requires binoculars or a small telescope to clearly see its current phase.  The featured time-lapse sequence was taken over the course of six months in 2015 from Surgères, Charente-Maritime, France, and shows not only how Venus changes phase, but changes angular size as well. When Venus is on the far side of the Sun from the Earth, it appears angularly smallest and nearest to full phase, while when Venus and Earth are on the same side of the Sun, Venus appears larger, but as a crescent. This month Venus rises before dawn in waxing gibbous phases.    Free APOD Lecture: January 9, 2024 to the Amateur Astronomers of Association of New York',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/VenusPhases_Gonzales_1280.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'The Phases of Venus',
      url: 'https://apod.nasa.gov/apod/image/2401/VenusPhases_Gonzales_960.jpg'
    },
    {
      copyright: '\nRitesh Biswas\n',
      date: '2024-01-09',
      explanation: 'Thor not only has his own day (Thursday), but a helmet in the heavens.  Popularly called Thor\'s Helmet, NGC 2359 is a hat-shaped cosmic cloud with wing-like appendages. Heroically sized even for a Norse god, Thor\'s Helmet is about 30 light-years across. In fact, the cosmic head-covering is more like an interstellar bubble, blown with a fast wind from the bright, massive star near the bubble\'s center. Known as a Wolf-Rayet star, the central star is an extremely hot giant thought to be in a brief, pre-supernova stage of evolution. NGC 2359 is located about 15,000 light-years away toward the constellation of the Great Overdog. This remarkably sharp image is a mixed cocktail of data from  narrowband filters, capturing not only natural looking stars but details of the nebula\'s filamentary structures. The star in the center of Thor\'s Helmet is expected to explode in a spectacular supernova sometime within the next few thousand years.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/ThorsHelmet_Biswas_1436.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Thor\'s Helmet',
      url: 'https://apod.nasa.gov/apod/image/2401/ThorsHelmet_Biswas_960.jpg'
    },
    {
      copyright: 'Gábor Galambos',
      date: '2024-01-10',
      explanation: 'This colorful skyscape spans about three full moons across nebula rich starfields along the plane of our Milky Way Galaxy toward the royal northern constellation Cepheus. Near the edge of the region\'s massive molecular cloud some 2,400 light-years away, bright reddish emission region Sharpless (Sh)2-155 is at the center of the frame, also known as the Cave Nebula. About 10 light-years across the cosmic cave\'s bright walls of gas are ionized by ultraviolet light from the hot young stars around it. Dusty bluish reflection nebulae, like vdB 155 at the left, and dense obscuring clouds of dust also abound on the interstellar canvas. Astronomical explorations have revealed other dramatic signs of star formation, including the bright reddish fleck of Herbig-Haro (HH) 168. At the upper left in the frame, the Herbig-Haro object emission is generated by energetic jets from a newborn star.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/Sh2_155_4K_5Mb.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'The Light, the Dark, and the Dusty',
      url: 'https://apod.nasa.gov/apod/image/2401/Sh2_155_4K_5Mb1024.jpg'
    },
    {
      copyright: '염범석 Bum-Suk Yeom',
      date: '2024-01-11',
      explanation: 'Named for a forgotten constellation, the Quadrantid Meteor Shower puts on an annual show for planet Earth\'s northern hemisphere skygazers. The shower\'s radiant on the sky lies within the old, astronomically obsolete constellation Quadrans Muralis. That location is not far from the Big Dipper asterism, known to some as the Plough, at the boundaries of the modern constellations Bootes and Draco. The Big Dipper "handle" stars are near the upper right corner in this frame, with the meteor shower radiant just below. North star Polaris is toward the top left. Pointing back toward the radiant, Quadrantid meteors streak through the night in this skyscape from Jangsu, South Korea. The composite image was recorded in the hours around the shower\'s peak on January 4, 2024. A likely source of the dust stream that produces Quadrantid meteors was identified in 2003 as an asteroid.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/2024_quadrantids_240104_med_bsyeom.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Quadrantids of the North',
      url: 'https://apod.nasa.gov/apod/image/2401/2024_quadrantids_240104_med_bsyeom1024.jpg'
    },
    {
      copyright: 'Michael Luy',
      date: '2024-01-12',
      explanation: 'Yesterday, the Moon was New. But on January 9, early morning risers around planet Earth were treated to the sight of an old Moon, low in the east as the sky grew bright before dawn. Above the city of Saarburg in Rhineland-Palatinate, western Germany, this simple snapshot found the waning Moon\'s sunlit crescent just before sunrise. But also never wandering far from the Sun in Earth\'s sky, inner planets Venus and Mercury shared the cold morning skyview. In the foreground are the historic city\'s tower and castle with ruins from the 10th century.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/HimmlichesDreieckSaarburg_TWAN_mercurybildweb.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Good Morning Moon',
      url: 'https://apod.nasa.gov/apod/image/2401/HimmlichesDreieckSaarburg_TWAN_mercurybildweb1024.jpg'
    },
    {
      copyright: 'Radoslav Zboran',
      date: '2024-01-13',
      explanation: 'rth\'s orbit around the Sun is not a circle, it\'s an ellipse. The point along its elliptical orbit where our fair planet is closest to the Sun is called perihelion. This year, perihelion was on January 2 at 01:00 UTC, with the Earth about 3 million miles closer to the Sun than it was at aphelion (last July 6), the farthest point in its elliptical orbit. Of course, distance from the Sun doesn\'t determine the seasons, and it doesn\'t the determine size of Sun halos. Easier to see with the Sun hidden behind a tall tree trunk, this beautiful ice halo forms a 22 degree-wide circle around the Sun, recorded while strolling through the countryside near Heroldstatt, Germany. The Sun halo\'s 22 degree angular diameter is determined by the six-sided geometry of water ice crystals drifting high in planet Earth\'s atmosphere.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/22halo_Zboran.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Circling the Sun',
      url: 'https://apod.nasa.gov/apod/image/2401/22halo_Zboran1115.jpg'
    },
    {
      copyright: '\nJingyi Zhang & Wang Zheng\n',
      date: '2024-01-14',
      explanation: 'Have you ever seen a dragon in the sky? Although real flying dragons don\'t exist, a huge dragon-shaped aurora developed in the sky over Iceland in 2019.  The aurora was caused by a hole in the Sun\'s corona that expelled charged particles into a solar wind that followed a changing interplanetary magnetic field to Earth\'s magnetosphere.  As some of those particles then struck Earth\'s atmosphere, they excited atoms which subsequently emitted light: aurora. This iconic display was so enthralling that the photographer\'s mother ran out to see it and was captured in the foreground.  Our active Sun continues to show an unusually high number of prominences, filaments, sunspots, and large active regions as solar maximum approaches in 2025.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/DragonAurora_Zhang_2241.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Dragon Aurora over Iceland',
      url: 'https://apod.nasa.gov/apod/image/2401/DragonAurora_Zhang_960.jpg'
    },
    {
      date: '2024-01-15',
      explanation: 'Sometimes, it\'s the stars that are the hardest to see that are the most interesting. IC 348 is a young star cluster that illuminates surrounding filamentary dust.  The stringy and winding dust appears pink in this recently released infrared image from the Webb Space Telescope. In visible light, this dust reflects mostly blue light, giving the surrounding material the familiar blue hue of a reflection nebula.  Besides bright stars, several cool objects have been located in IC 348, visible because they glow brighter in infrared light.  These objects are hypothesized to be low mass brown dwarfs.  Evidence for this includes the detection of an unidentified atmospheric chemical, likely a hydrocarbon, seen previously in the atmosphere of Saturn. These objects appear to have masses slightly greater than known planets, only a few times greater than Jupiter.  Together, these indicate that this young star cluster contains something noteworthy -- young planet-mass brown dwarfs that float free, not orbiting any other star.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/IC348_webb_3788.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Star Cluster IC 348 from Webb',
      url: 'https://apod.nasa.gov/apod/image/2401/IC348_webb_960.jpg'
    },
    {
      copyright: '\nMichele Guzzini\n',
      date: '2024-01-16',
      explanation: 'Do you recognize this constellation?  Although it is one of the most recognizable star groupings on the sky, this is a more full Orion than you can see -- an Orion only revealed with long exposure digital camera imaging and post- processing.  Here the cool red giant Betelgeuse takes on a strong orange tint as the brightest star on the upper left.  Orion\'s hot blue stars are numerous, with supergiant Rigel balancing Betelgeuse on the lower right, and Bellatrix at the upper right. Lined up in Orion\'s belt are three stars all about 1,500 light-years away, born from the constellation\'s well-studied interstellar clouds. Just below Orion\'s belt is a bright but fuzzy patch that might also look familiar -- the stellar nursery known as Orion\'s Nebula.  Finally, just barely visible to the unaided eye but quite striking here is Barnard\'s Loop -- a huge gaseous emission nebula surrounding Orion\'s Belt and Nebula discovered over 100 years ago by the pioneering Orion photographer E. E. Barnard.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/OrionMcc_Guzzini_1366.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'The Orion You Can Almost See',
      url: 'https://apod.nasa.gov/apod/image/2401/OrionMcc_Guzzini_960.jpg'
    },
    {
      copyright: 'Gene Cernan',
      date: '2024-01-17',
      explanation: 'Get out your red/blue glasses and check out this stereo view of another world. The scene was recorded by Apollo 17 mission commander Eugene Cernan on December 11, 1972, one orbit before descending to land on the Moon. The stereo anaglyph was assembled from two photographs (AS17-147-22465, AS17-147-22466) captured from his vantage point on board the Lunar Module Challenger as he and Dr. Harrison Schmitt flew over Apollo 17\'s landing site in the Taurus-Littrow Valley. The broad, sunlit face of the mountain dubbed South Massif rises near the center of the frame, above the dark floor of Taurus-Littrow to its left. Piloted by Ron Evans, the Command Module America is visible in orbit in the foreground against the South Massif\'s peak. Beyond the mountains, toward the lunar limb, lies the Moon\'s Mare Serenitatis. Four astronauts will venture around the Moon and back again on the Artemis II mission, scheduled for launch no earlier than September 2025.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/22466-22467anaVantuyne.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'America and the Sea of Serenity',
      url: 'https://apod.nasa.gov/apod/image/2401/22466-22467anaVantuyne900.jpg'
    },
    {
      copyright: 'Ralf Rohner',
      date: '2024-01-18',
      explanation: 'Northern lights shine in this night skyview from planet Earth\'s stratosphere, captured on January 15. The single, 5 second exposure was made with a hand-held camera on board an aircraft above Winnipeg, Canada. During the exposure, terrestrial lights below leave colorful trails along the direction of motion of the speeding aircraft. Above the more distant horizon, energetic particles accelerated along Earth\'s magnetic field at the planet\'s polar regions excite atomic oxygen to create the shimmering display of Aurora Borealis. The aurora\'s characteristic greenish hue is generated at altitudes of 100-300 kilometers and red at even higher altitudes and lower atmospheric densities. The luminous glow of faint stars along the plane of our Milky Way galaxy arcs through the night, while the Andromeda galaxy extends this northern skyview to extragalactic space. A diffuse hint of Andromeda, the closest large spiral to the Milky Way, can just be seen to the upper left.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/MagneticStormRohner.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Northern Lights from the Stratosphere',
      url: 'https://apod.nasa.gov/apod/image/2401/MagneticStormRohner1024.jpg'
    },
    {
      date: '2024-01-19',
      explanation: 'Jupiter, our Solar System\'s ruling gas giant, is also the fastest spinning planet, rotating once in less than 10 hours. The gas giant doesn\'t rotate like a solid body though. A day on Jupiter is about 9 hours and 56 minutes long at the poles, decreasing to 9 hours and 50 minutes near the equator. The giant planet\'s fast rotation creates strong jet streams, separating its clouds into planet girdling bands of dark belts and bright zones. You can easily follow Jupiter\'s rapid rotation in this sharp sequence of images from the night of January 15, all taken with a camera and small telescope outside of Paris, France. Located just south of the equator, the giant planet\'s giant storm system, also known as the Great Red Spot, can be seen moving left to right with the planet\'s rotation. From lower left to upper right, the sequence spans about 2 hours and 30 minutes.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/2024_01_15-Jup-2h30-Chronograph.png',
      media_type: 'image',
      service_version: 'v1',
      title: 'Jupiter over 2 Hours and 30 Minutes',
      url: 'https://apod.nasa.gov/apod/image/2401/2024_01_15-Jup-2h30-Chronograph600.png'
    },
    {
      copyright: 'Dennis Huff',
      date: '2024-01-20',
      explanation: 'The December 28 night launch of a Falcon Heavy rocket from Kennedy Space Center in Florida marked the fifth launch for the rocket\'s reusable side boosters. About 2 minutes 20 seconds into the flight, the two side boosters separated from the rocket\'s core stage. Starting just after booster separation, this three minute long exposure captures the pair\'s remarkable boostback burns, maneuvers executed prior to their return to landing zones on planet Earth. While no attempt was made to recover the Falcon Heavy\'s core stage, both side boosters landed successfully and can be flown again. The four previous flights for these side boosters included last October\'s launch of NASA\'s asteroid-bound Psyche mission. Their next planned flight is on the Europa Clipper mission scheduled for launch in October 2024.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/DSC07781_11Huff.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Falcon Heavy Boostback Burn',
      url: 'https://apod.nasa.gov/apod/image/2401/DSC07781_12Huff800.jpg'
    },
    {
      date: '2024-01-21',
      explanation: 'Yes, but can your blizzard do this? In the Upper Peninsula of Michigan\'s Storm of the Century in 1938, some snow drifts reached the level of utility poles. Nearly a meter of new and unexpected snow fell over two days in a storm that started 86 years ago this week.  As snow fell and gale-force winds piled snow to surreal heights, many roads became not only impassable but unplowable; people became stranded, cars, school buses and a train became mired, and even a dangerous fire raged. Two people were killed and some students were forced to spend several consecutive days at school.  The featured image was taken by a local resident soon after the storm. Although all of this snow eventually melted, repeated snow storms like this help build lasting glaciers in snowy regions of our planet Earth.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/snowpoles_brinkman_960.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'The Upper Michigan Blizzard of 1938',
      url: 'https://apod.nasa.gov/apod/image/2401/snowpoles_brinkman_960.jpg'
    },
    {
      copyright: '\nEnzo Massa Micon\n',
      date: '2024-01-22',
      explanation: 'Can the Moon and a mountain really cast similar shadows? Yes, but the division between light and dark does not have to be aligned. Pictured, a quarter moon was captured above the mountain Grivola in Italy in early October of 2022.  The Sun is to the right of the featured picturesque landscape, illuminating the right side of the Moon in a similar way that it illuminates the right side of the mountain. This lunar phase is called "quarter", in part, because the lit fraction visible from Earth is one quarter of the entire lunar surface.  Digital post-processing of this single exposure gave both  gigantic objects more prominence. Capturing the terminator of this quarter moon in close alignment with nearly vertical mountain ridge required careful timing because the Earth rotates once a day.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/GrivolaMoon_Micon_1600.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Shadows of Mountain and Moon',
      url: 'https://apod.nasa.gov/apod/image/2401/GrivolaMoon_Micon_1080.jpg'
    },
    {
      copyright: '\nAlistair Symon\n',
      date: '2024-01-23',
      explanation: 'How well do you know the night sky? OK, but how well can you identify famous sky objects in a very deep image? Either way, here is a test: see if you can find some well-known night-sky icons in a deep image filled with faint nebulosity.  This image contains the Pleiades star cluster, Barnard\'s Loop, Horsehead Nebula, Orion Nebula, Rosette Nebula, Cone Nebula, Rigel, Jellyfish Nebula, Monkey Head Nebula, Flaming Star Nebula, Tadpole Nebula, Aldebaran, Simeis 147, Seagull Nebula and the California Nebula. To find their real locations, here is an annotated image version.  The reason this task might be difficult is similar to the reason it is initially hard to identify familiar constellations in a very dark sky: the tapestry of our night sky has an extremely deep hidden complexity.  The featured composite reveals some of this complexity in a mosaic of 28 images taken over 800 hours from dark skies over Arizona, USA.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/SeagullToCalifornia_Symon_2000.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Deep Nebulas: From Seagull to California',
      url: 'https://apod.nasa.gov/apod/image/2401/SeagullToCalifornia_Symon_960.jpg'
    },
    {
      date: '2024-01-24',
      explanation: 'What do the Earth and Moon look like from beyond the Moon? Although frequently photographed together, the familiar duo was captured with this unusual perspective in late 2022 by the robotic Orion spacecraft of NASA\'s Artemis I mission as it looped around Earth\'s most massive satellite and looked back toward its home world. Since our Earth is about four times the diameter of the Moon, the satellite’s seemingly large size was caused by the capsule being closer to the smaller body. Artemis II, the next launch in NASA’s Artemis series, is currently scheduled to take people around the Moon in 2025, while Artemis III is planned to return humans to lunar surface in late 2026. Last week,  JAXA\'s robotic SLIM spacecraft, launched from Japan, landed on the Moon and released two hopping rovers.   Explore Your Universe: Random APOD Generator',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/EarthMoon_Artemis1Saunders_1600.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Earth and Moon from Beyond',
      url: 'https://apod.nasa.gov/apod/image/2401/EarthMoon_Artemis1Saunders_960.jpg'
    },
    {
      copyright: 'Harri Kiiskinen',
      date: '2024-01-25',
      explanation: 'You might not immediately recognize this street map of a neighborhood in Jyväskylä, Finland, planet Earth. But that\'s probably because the map was projected into the night sky and captured with an allsky camera on January 16. The temperature recorded on that northern winter night was around minus 20 degrees Celsius. As ice crystals formed in the atmosphere overhead, street lights spilling illumination into the sky above produced visible light pillars, their ethereal appearance due to specular reflections from the fluttering crystals\' flat surfaces. Of course, the projected light pillars trace a map of the brightly lit local streets, though reversed right to left in the upward looking camera\'s view. This light pillar street map was seen to hover for hours in the Jyväskylä night.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/image-20240116164558_v1.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Jyväskylä in the Sky',
      url: 'https://apod.nasa.gov/apod/image/2401/image-20240116164558_v11024.jpg'
    },
    {
      copyright: 'Reg Pratt',
      date: '2024-01-26',
      explanation: 'silon Tauri lies 146 light-years away. A K-type red giant star, epsilon Tau is cooler than the Sun, but with about 13 times the solar radius it shines with nearly 100 times the solar luminosity. A member of the Hyades open star cluster the giant star is known by the proper name Ain, and along with brighter giant star Aldebaran, forms the eyes of Taurus the Bull. Surrounded by dusty, dark clouds in Taurus, epsilon Tau is also known to have a planet. Discovered by radial velocity measurements in 2006, epsilon Tauri b is a gas giant planet larger than Jupiter with an orbital period of 1.6 years. And though the exoplanet can\'t be seen directly, on a dark night its parent star epsilon Tauri is easily visible to the unaided eye.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/Ain_4096.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Epsilon Tauri: Star with Planet',
      url: 'https://apod.nasa.gov/apod/image/2401/Ain_1024.jpg'
    },
    {
      copyright: 'Yuri Beletsky',
      date: '2024-01-27',
      explanation: 'A popular name for January\'s full moon in the northern hemisphere is the Full Wolf Moon. As the new year\'s first full moon, it rises over Las Campanas Observatory in this dramatic Earth-and-moonscape. Peering from the foreground like astronomical eyes are the observatory\'s twin 6.5 meter diameter Magellan telescopes. The snapshot was captured with telephoto lens across rugged terrain in the Chilean Atacama Desert, taken at a distance of about 9 miles from the observatory and about 240,000 miles from the lunar surface. Of course the first full moon of the lunar new year, known to some as the Full Snow Moon, will rise on February 24.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/Full_Moon_Jan_24_Beletsky.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Full Observatory Moon',
      url: 'https://apod.nasa.gov/apod/image/2401/Full_Moon_Jan_24_Beletsky1024c.jpg'
    },
    {
      date: '2024-01-28',
      explanation: 'What color is Pluto, really? It took some effort to figure out.  Even given all of the images sent back to Earth when the robotic New Horizons spacecraft sped past Pluto in 2015, processing these multi-spectral frames to approximate what the human eye would see was challenging. The result featured here, released three years after the raw data was acquired by New Horizons, is the highest resolution true color image of Pluto ever taken. Visible in the image is the light-colored, heart-shaped, Tombaugh Regio, with the unexpectedly smooth Sputnik Planitia, made of frozen nitrogen, filling its western lobe. New Horizons found the dwarf planet to have a surprisingly complex surface composed of many regions having perceptibly different hues.  In total, though, Pluto is mostly brown, with much of its muted color originating from small amounts of surface methane energized by ultraviolet light from the Sun. 	',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/PlutoTrueColor_NewHorizons_8000.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Pluto in True Color',
      url: 'https://apod.nasa.gov/apod/image/2401/PlutoTrueColor_NewHorizons_960.jpg'
    },
    {
      copyright: '\nCraig Stocks\n',
      date: '2024-01-29',
      explanation: 'The well-known Pleiades star cluster is slowly destroying part of a passing cloud of gas and dust. The Pleiades is the brightest open cluster of stars on Earth\'s sky and can be seen from almost any northerly location with the unaided eye.  Over the past 100,000 years, a field of gas and dust is moving by chance right through the Pleiades star cluster and is causing a strong reaction between the stars and dust. The passing cloud might be part of the Radcliffe wave, a newly discovered structure of gas and dust connecting several regions of star formation in the nearby part of our Milky Way galaxy.  Pressure from the stars\' light significantly repels the dust in the surrounding blue reflection nebula, with smaller dust particles being repelled more strongly.  A short-term result is that parts of the dust cloud have become filamentary and stratified. The featured deep image incorporates nearly 9 hours of exposure and was captured from Utah Desert Remote Observatory in Utah, USA, last year.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/Pleiades_Stocks_2048.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'The Pleiades: Seven Dusty Sisters',
      url: 'https://apod.nasa.gov/apod/image/2401/Pleiades_Stocks_960.jpg'
    },
    {
      copyright: '\nJAXA, \nTakara Tomy, \nSony Co., \nDoshisha U.\n',
      date: '2024-01-30',
      explanation: 'New landers are on the Moon. Nearly two weeks ago, Japan\'s Smart Lander for Investigating Moon (SLIM) released two rovers as it descended, before its main lander touched down itself. The larger of the two rovers can hop like a frog, while the smaller rover is about the size of a baseball and can move after pulling itself apart like a transformer. The main lander, nicknamed Moon Sniper, is seen in the featured image taken by the smaller rover. Inspection of the image shows that Moon Sniper\'s thrusters are facing up, meaning that the lander is upside down from its descent configuration and on its side from its intended landing configuration.  One result is that Moon Sniper\'s solar panels are not in the expected orientation, so that powering the lander had to be curtailed and adapted.  SLIM\'s lander has already succeeded as a technology demonstration, its main mission, but was not designed to withstand the lunar night -- which starts tomorrow.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/Slim_jaxa_960.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'SLIM Lands on the Moon',
      url: 'https://apod.nasa.gov/apod/image/2401/Slim_jaxa_960.jpg'
    },
    {
      copyright: '\nMarcin Ślipko\n',
      date: '2024-01-31',
      explanation: 'What does Orion rising look like to a camera? During this time of the year, the famous constellation is visible to the southeast just after sunset. From most Earthly locations, Orion\'s familiar star pattern, highlighted by the three-stars-in-a-row belt stars, rises sideways. An entire section of the night sky that includes Orion was photographed rising above Śnieżka, a mountain on the border between Poland and the Czech Republic.  The long duration exposure sequence brings up many faint features including the Orion and Flame Nebulas, both encompassed by the curving Barnard\'s Loop. The featured wide-angle camera composite also captured night sky icons including the blue Pleiades star cluster at the image top and the red Rosette Nebula to the left of Orion. Famous stars in the frame include Procyon, Betelgeuse, Rigel and Aldebaran. Orion will appear successively higher in the sky at sunset during the coming months.',
      hdurl: 'https://apod.nasa.gov/apod/image/2401/OrionRising_Slipko_2048.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Camera Orion Rising',
      url: 'https://apod.nasa.gov/apod/image/2401/OrionRising_Slipko_960.jpg'
    },
    {
      copyright: 'Jean-Baptiste Auroux',
      date: '2024-02-01',
      explanation: 'Barred spiral galaxy NGC 1365 is truly a majestic island universe some 200,000 light-years across. Located a mere 60 million light-years away toward the faint but heated constellation Fornax, NGC 1365 is a dominant member of the well-studied Fornax Cluster of galaxies. This sharp color image shows the intense, reddish star forming regions near the ends of the galaxy\'s central bar and along its spiral arms. Seen in fine detail, obscuring dust lanes cut across the galaxy\'s bright core. At the core lies a supermassive black hole. Astronomers think NGC 1365\'s prominent bar plays a crucial role in the galaxy\'s evolution, drawing gas and dust into a star-forming maelstrom and ultimately feeding material into the central black hole.',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/NGC1365_v4.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'NGC 1365: Majestic Island Universe',
      url: 'https://apod.nasa.gov/apod/image/2402/NGC1365_v4_1024.jpg'
    },
    {
      copyright: 'Sander de Jong',
      date: '2024-02-02',
      explanation: 'This cosmic view shows off an otherwise faint emission nebula IC 410, captured under clear Netherlands skies with telescope and narrowband filters. Above and right of center you can spot two remarkable inhabitants of the interstellar pond of gas and dust, known as the tadpoles of IC 410. Partly obscured by foreground dust, the nebula itself surrounds NGC 1893, a young galactic cluster of stars. Formed in the interstellar cloud a mere 4 million years ago, the intensely hot, bright cluster stars energize the glowing gas. Globules composed of denser cooler gas and dust, the tadpoles are around 10 light-years long and are likely sites of ongoing star formation. Sculpted by stellar winds and radiation their heads are outlined by bright ridges of ionized gas while their tails trail away from the cluster\'s central young stars. IC 410 and embedded NGC 1893 lie some 10,000 light-years away, toward the nebula-rich constellation Auriga.',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/Tadpoles2048original.png',
      media_type: 'image',
      service_version: 'v1',
      title: 'NGC 1893 and the Tadpoles of IC 410',
      url: 'https://apod.nasa.gov/apod/image/2402/Tadpoles1024original.png'
    },
    {
      date: '2024-02-03',
      explanation: 'Apollo 14\'s Lunar Module Antares landed on the Moon on February 5, 1971. Toward the end of the stay astronaut Ed Mitchell snapped a series of photos of the lunar surface while looking out a window, assembled into this detailed mosaic by Apollo Lunar Surface Journal editor Eric Jones. The view looks across the Fra Mauro highlands to the northwest of the landing site after the Apollo 14 astronauts had completed their second and final walk on the Moon. Prominent in the foreground is their Modular Equipment Transporter, a two-wheeled, rickshaw-like device used to carry tools and samples. Near the horizon at top center is a 1.5 meter wide boulder dubbed Turtle rock. In the shallow crater below Turtle rock is the long white handle of a sampling instrument, thrown there javelin-style by Mitchell. Mitchell\'s fellow moonwalker and first American in space, Alan Shepard, also used a makeshift six iron to hit two golf balls. One of Shepard\'s golf balls is just visible as a white spot below Mitchell\'s javelin.',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/a14pan9335-43emj.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Apollo 14: A View from Antares',
      url: 'https://apod.nasa.gov/apod/image/2402/a14pan9335-43emj_900.jpg'
    },
    {
      date: '2024-02-04',
      explanation: 'Stars are forming in the gigantic dust pillar called the Cone Nebula. Cones, pillars, and majestic flowing shapes abound in stellar nurseries where natal clouds of gas and dust are buffeted by energetic winds from newborn stars. The Cone Nebula, a well-known example, lies within the bright galactic star-forming region NGC 2264. The Cone was captured in unprecedented detail in this close-up composite of several observations from the Earth-orbiting Hubble Space Telescope. While the Cone Nebula, about 2,500 light-years away in Monoceros, is around 7 light-years long, the region pictured here surrounding the cone\'s blunted head is a mere 2.5 light-years across. In our neck of the galaxy that distance is just over half way from our Sun to its nearest stellar neighbors in the Alpha Centauri star system. The massive star NGC 2264 IRS, seen by Hubble\'s infrared camera in 1997, is the likely source of the wind sculpting the Cone Nebula and lies off the top of the image. The Cone Nebula\'s reddish veil is produced by dust and glowing hydrogen gas.',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/cone_hubbleschmidt_4048.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'The Cone Nebula from Hubble',
      url: 'https://apod.nasa.gov/apod/image/2402/cone_hubbleschmidt_960.jpg'
    },
    {
      copyright: '\nCarlos Taylor\n',
      date: '2024-02-05',
      explanation: 'What\'s happening in the core of the Carina Nebula?  Stars are forming, dying, and leaving an impressive tapestry of dark dusty filaments.  The entire Carina Nebula, cataloged as NGC 3372, spans over 300 light years and lies about 8,500 light-years away in the constellation of Carina. The nebula is composed predominantly of hydrogen gas, which emits the pervasive red and orange glows seen mostly in the center of this highly detailed featured image.  The blue glow around the edges is created primarily by a trace amount of glowing oxygen. Young and massive stars located in the nebula\'s center expel dust when they explode in supernovas.  Eta Carinae, the most energetic star in the nebula\'s center, was one of the brightest stars in the sky in the 1830s, but then faded dramatically.    Your Sky Surprise: What picture did APOD feature on your birthday? (post 1995)',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/Carina_Taylor_9714.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'In the Core of the Carina Nebula',
      url: 'https://apod.nasa.gov/apod/image/2402/Carina_Taylor_960.jpg'
    },
    {
      copyright: '\nNASA, \nESA, \nCSA, \nSTScI, \nJ. Lee (STScI), \nT. Williams (Oxford), \nR. Chandar (UToledo), \nD. Calzetti (UMass), \nPHANGS Team\n',
      date: '2024-02-06',
      explanation: 'What\'s different about this galaxy? Very little, which makes the Spanish Dancer galaxy, NGC 1566, one of the most typical and photogenic spirals on the sky. There is something different about this galaxy image, though, because it is a diagonal combination of two images: one by the Hubble Space Telescope on the upper left, and the other by the James Webb Space Telescope on the lower right.  The Hubble image was taken in ultraviolet light and highlights the locations of bright blue stars and dark dust along the galaxy\'s impressive spiral arms. In contrast, the Webb image was taken in infrared light and highlights where the same dust emits more light than it absorbed. In the rollover image, the other two sides of these images are revealed. Blinking between the two images shows which stars are particularly hot because they glow brighter in ultraviolet light, and the difference between seemingly empty space and infrared-glowing dust.   Image Crunching Opportunity:  Take NASA\'s Astrophoto Challenge',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/Ngc1566_HubbleWebb_2125.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'NGC 1566: A Spiral Galaxy from Webb and Hubble',
      url: 'https://apod.nasa.gov/apod/image/2402/Ngc1566_HubbleWebb_960.jpg'
    },
    {
      copyright: '\nKent E. Biggs\n',
      date: '2024-02-07',
      explanation: 'Are these two galaxies really attracted to each other? Yes, gravitationally, and the result appears as an enormous iconic heart -- at least for now. Pictured is the pair of galaxies cataloged as NGC 4038 and NGC 4039,known as the Antennae Galaxies.  Because they are only 60 million light years away, close by intergalactic standards, the pair is one of the best studied interacting galaxies on the night sky. Their strong attraction began about a billion years ago when they passed unusually close to each other.  As the two galaxies interact, their stars rarely collide, but new stars are formed when their interstellar gases crash together.  Some new stars have already formed, for example, in the long antennae seen extending out from the sides of the dancing duo. By the time the galaxy merger is complete, likely over a billion years from now, billions of new stars may have formed.   Open Science: Browse 3,300+ codes in the Astrophysics Source Code Library',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/Antennae_Biggs_3840.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'The Heart Shaped Antennae Galaxies',
      url: 'https://apod.nasa.gov/apod/image/2402/Antennae_Biggs_960.jpg'
    },
    {
      copyright: 'Marco Lorenzi',
      date: '2024-02-08',
      explanation: 'Globular star cluster 47 Tucanae is a jewel of the southern sky. Also known as NGC 104, it roams the halo of our Milky Way Galaxy along with some 200 other globular star clusters. The second brightest globular cluster (after Omega Centauri) as seen from planet Earth, 47 Tuc lies about 13,000 light-years away. It can be spotted with the naked-eye close on the sky to the Small Magellanic Cloud in the constellation of the Toucan. The dense cluster is made up of hundreds of thousands of stars in a volume only about 120 light-years across. Red giant stars on the outskirts of the cluster are easy to pick out as yellowish stars in this sharp telescopic portrait. Tightly packed globular cluster 47 Tuc is also home to a star with the closest known orbit around a black hole.',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/NGC104_RGB_NASA.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Globular Star Cluster 47 Tuc',
      url: 'https://apod.nasa.gov/apod/image/2402/NGC104_RGB_NASA1024.png'
    },
    {
      copyright: 'Tommy Lease',
      date: '2024-02-09',
      explanation: 'Not all roses are red of course, but they can still be very pretty. Likewise, the beautiful Rosette Nebula and other star forming regions are often shown in astronomical images with a predominately red hue, in part because the dominant emission in the nebula is from hydrogen atoms. Hydrogen\'s strongest optical emission line, known as H-alpha, is in the red region of the spectrum. But the beauty of an emission nebula need not be appreciated in red light alone. Other atoms in the nebula are also excited by energetic starlight and produce narrow emission lines as well. In this close-up view of the Rosette Nebula, narrowband images are mapped into broadband colors to show emission from Sulfur atoms in red, Hydrogen in green, and Oxygen in blue. In fact, the scheme of mapping these narrow atomic emission lines (SHO) into the broader colors (RGB) is adopted in many Hubble images of emission nebulae. This image spans about 50 light-years across the center of the Rosette Nebula. The nebula lies some 3,000 light-years away in the constellation Monoceros.',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/Rosette2024newt533mmcopy.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'When Roses Aren\'t Red',
      url: 'https://apod.nasa.gov/apod/image/2402/Rosette2024newt533mmcopy1024.png'
    },
    {
      date: '2024-02-10',
      explanation: 'On January 18, 2024, during its 72nd flight in the thin Martian atmosphere, autonomous Mars Helicopter Ingenuity rose to an altitude of 12 meters (40 feet) and hovered for 4.5 seconds above the Red Planet.  Ingenuity\'s 72nd landing was a rough one though. During descent it lost contact with the Perseverance rover about 1 meter above the Martian surface. Ingenuity was able to transmit this image after contact was re-established, showing the shadow of one of its rotor blades likely damaged during landing. And so, after wildly exceeding expectations during over 1,000 days of exploring Mars, the history-making Ingenuity has ended its flight operations. Nicknamed Ginny, Mars Helicopter Ingenuity became the first aircraft to achieve powered, controlled flight on another planet on April 19, 2021. Before launch, a small piece of material from the lower-left wing of the Wright Brothers Flyer 1, the first aircraft to achieve powered, controlled flight on planet Earth, was fixed to the underside of Ingenuity\'s solar panel.',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/PIA26243-web.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'The Shadow of Ingenuity\'s Damaged Rotor Blade',
      url: 'https://apod.nasa.gov/apod/image/2402/PIA26243-1024.jpg'
    },
    {
      date: '2024-02-11',
      explanation: 'Why would the shadow of a rocket\'s launch plume point toward the Moon?  In early 2001 during a launch of the space shuttle Atlantis, the Sun, Earth, Moon, and rocket were all properly aligned for this photogenic coincidence.  First, for the space shuttle\'s plume to cast a long shadow, the time of day must be either near sunrise or sunset.  Only then will the shadow be its longest and extend all the way to the horizon.  Finally, during a Full Moon, the Sun and Moon are on opposite sides of the sky.  Just after sunset, for example, the Sun is slightly below the horizon, and, in the other direction, the Moon is slightly above the horizon.  Therefore, as Atlantis blasted off, just after sunset, its shadow projected away from the Sun toward the opposite horizon, where the Full Moon happened to be.    Almost Hyperspace: Random APOD Generator',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/sts98plume_nasa_1111.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Rocket Plume Shadow Points to the Moon',
      url: 'https://apod.nasa.gov/apod/image/2402/sts98plume_nasa_960.jpg'
    },
    {
      copyright: '\nJulien Cadena & \nMickael Coulon; \nText: Natalia Lewandowska \n(SUNY Oswego)\n',
      date: '2024-02-12',
      explanation: 'Planetary nebulae like Heckathorn-Fesen-Gull 1 (HFG1) and Abell 6 in the constellation Cassiopeia are remnants from the last phase of a medium sized star like our Sun.  In spite of their shapes, planetary nebulae have nothing in common with actual planets.  Located in the bottom left part of the featured photo, HFG1 was created by the binary star system V664 Cas, which consists of a white dwarf star and a red giant star. Both stars orbit their center of mass over about half an Earth day.  Traveling with the entire nebula at a speed about 300 times faster than the fastest train on Earth, V664 Cas generates a bluish arc shaped shock wave. The wave interacts most strongly with the surrounding interstellar medium in the areas where the arc is brightest. After roughly 10,000 years, planetary nebulae become invisible due to a lack of ultraviolet light being emitted by the stars that create them.  Displaying beautiful shapes and structures, planetary nebulae are highly desired objects for astrophotographers.',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/Hfg1Abell6_CadenaCoulon_6140.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'HFG1 & Abell 6: Planetary Nebulae',
      url: 'https://apod.nasa.gov/apod/image/2402/Hfg1Abell6_CadenaCoulon_1080.jpg'
    },
    {
      copyright: '\nAntoni Zegarski\n',
      date: '2024-02-13',
      explanation: 'Did you see the full moon last month? During every month, on average, a full moon occurs in the skies over planet Earth. This is because the Moon takes a month to complete another orbit around our home planet, goes through all of its phases, and once again has its entire Earth-facing half lit by reflected sunlight.  Many indigenous cultures give each full moon a name, and this past full moon\'s names include the Ice Moon, the Stay at Home Moon, and the Quiet Moon. Occurring in January on the modern western calendar, several cultures have also named the most recent full moon the Wolf Moon, in honor of the famous howling animal. Featured here above the Italian Alps mountains, this past Wolf Moon was captured in combined long and short exposure images.  The image is striking because, to some, the surrounding clouds appear as a wolf\'s mouth ready to swallow the Wolf Moon, while others see the Moon as a wolf\'s eye.',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/WolfMoon_Zegarski_3648.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'A January Wolf Moon',
      url: 'https://apod.nasa.gov/apod/image/2402/WolfMoon_Zegarski_960.jpg'
    },
    {
      copyright: '\nOlivier Bernard & \nPhilippe Bernhard\n',
      date: '2024-02-14',
      explanation: 'Can you find the Rosette Nebula? The large, red, and flowery-looking nebula on the upper left may seem the obvious choice, but that is actually just diffuse hydrogen emission surrounding the Cone and Fox Fur Nebulas. The famous Rosette Nebula is really located on the lower right and connected to the other nebulas by irregular filaments.  Because the featured image of Rosetta\'s field is so wide and deep, it seems to contain other flowers.  Designated NGC 2237, the center of the Rosette nebula is populated by the bright blue stars of open cluster NGC 2244, whose winds and energetic light are evacuating the nebula\'s center.  The Rosette Nebula is about 5,000 light years distant and, just by itself, spans about three times the diameter of a full moon. This flowery field can be found toward the constellation of the Unicorn  (Monoceros).',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/RosetteCone_Bernard_5398.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Rosette Deep Field',
      url: 'https://apod.nasa.gov/apod/image/2402/RosetteCone_Bernard_960.jpg'
    },
    {
      copyright: 'Steve Crouch',
      date: '2024-02-15',
      explanation: 'Shiny NGC 253 is one of the brightest spiral galaxies visible, and also one of the dustiest.  Some call it the Silver Coin Galaxy for its appearance in small telescopes, or just the Sculptor Galaxy for its location within the boundaries of the southern constellation Sculptor.  Discovered in 1783 by mathematician and astronomer Caroline Herschel, the dusty island universe lies a mere 10 million light-years away. About 70 thousand light-years across, NGC 253 is the largest member of the Sculptor Group of Galaxies, the nearest to our own Local Group of Galaxies.  In addition to its spiral dust lanes, tendrils of dust seem to be rising from its galactic disk laced with young star clusters and star forming regions in this colorful galaxy portrait. The high dust content accompanies frantic star formation, earning NGC 253 the designation of a starburst galaxy. NGC 253 is also known to be a strong source of high-energy x-rays and gamma rays, likely due to massive black holes near the galaxy\'s center.',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/ngc253_STXL6303_RC14_LHaRGB_2023.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'NGC 253: Dusty Island Universe',
      url: 'https://apod.nasa.gov/apod/image/2402/ngc253_STXL6303_RC14_LHaRGB_2023_1024.jpg'
    },
    {
      copyright: 'Dan Bartlett',
      date: '2024-02-16',
      explanation: 'Heading for its next perihelion passage on April 21, Comet 12P/Pons-Brooks is growing brighter. The greenish coma of this periodic Halley-type comet has become relatively easy to observe in small telescopes. But the bluish ion tail now streaming from the active comet\'s coma and buffeted by the solar wind, is faint and difficult to follow. Still, in this image stacked exposures made on the night of February 11 reveal the fainter tail\'s detailed structures. The frame spans over two degrees across a background of faint stars and background galaxies toward the northern constellation Lacerta. Of course Comet 12P\'s April 21 perihelion passage will be only two weeks after the April 8 total solar eclipse, putting the comet in planet Earth\'s sky along with a totally eclipsed Sun.',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/12P_Pons_Brooks_2024_02_11_185335PST_JuneLake_DEBartlett.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Structure in the Tail of Comet 12P/Pons-Brooks',
      url: 'https://apod.nasa.gov/apod/image/2402/12P_Pons_Brooks_2024_02_11_185335PST_JuneLake_DEBartlett800.jpg'
    },
    {
      copyright: 'Wang Letian',
      date: '2024-02-17',
      explanation: 'A cosmic dust grain plowing through the upper atmosphere much faster than a falling leaf created this brilliant meteor streak. In a serendipitous moment, the sublime night sky view was captured from the resort island of Capri, in the Bay of Naples, on the evening of February 8. Looking across the bay, the camera faces northeast toward the lights of Naples and surrounding cities. Pointing toward the horizon, the meteor streak by chance ends above the silhouette of Mount Vesuvius. One of planet Earth\'s most famous volcanos, an eruption of Mount Vesuvius destroyed the city of Pompeii in 79 AD.',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/MeteorBayofNaples_V2.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Meteor over the Bay of Naples',
      url: 'https://apod.nasa.gov/apod/image/2402/MeteorBayofNaples_V2_1024.jpg'
    },
    {
      date: '2024-02-18',
      explanation: 'Is this one galaxy or two?  This question came to light in 1950 when astronomer Arthur Hoag chanced upon this unusual extragalactic object.  On the outside is a ring dominated by bright blue stars, while near the center lies a ball of much redder stars that are likely much older.  Between the two is a gap that appears almost completely dark.  How Hoag\'s Object formed, including its nearly perfectly round ring of stars and gas, remains unknown.  Genesis hypotheses include a galaxy collision billions of years ago and the gravitational effect of a central bar that has since vanished. The featured photo was taken by the Hubble Space Telescope and reprocessed using an artificially intelligent de-noising algorithm.  Observations in radio waves indicate that Hoag\'s Object has not accreted a smaller galaxy in the past billion years.  Hoag\'s Object spans about 100,000 light years and lies about 600 million light years away toward the constellation of the Snake (Serpens).  Many galaxies far in the distance are visible toward the right, while coincidentally, visible in the gap at about seven o\'clock, is another but more distant ring galaxy.',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/Hoag_HubbleBlanco_3000.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Hoag\'s Object: A Nearly Perfect Ring Galaxy',
      url: 'https://apod.nasa.gov/apod/image/2402/Hoag_HubbleBlanco_1080.jpg'
    },
    {
      date: '2024-02-19',
      explanation: 'What\'s happening near the Sun?  To help find out, NASA launched the robotic Parker Solar Probe (PSP) to investigate regions closer to the Sun than ever before. The PSP\'s looping orbit brings it nearer to the Sun each time around -- every few months. The featured time-lapse video shows the view looking sideways from behind PSP\'s Sun shield during its 16th approach to the Sun last year -- from well within the orbit of Mercury.  The PSP\'s Wide Field Imager for Solar Probe (WISPR) cameras took the images over eleven days, but they are digitally compressed here into about one minute video.  The waving of the solar corona is visible, as is a coronal mass ejection, with stars, planets, and even the central band of our Milky Way Galaxy streaming by in the background as the PSP orbits the Sun. PSP has found the solar neighborhood to be surprisingly complex and to include switchbacks -- times when the Sun\'s magnetic field briefly reverses itself.',
      media_type: 'video',
      service_version: 'v1',
      title: 'Looking Sideways from the Parker Solar Probe',
      url: 'https://www.youtube.com/embed/x-wX-wClfig?rel=0'
    },
    {
      date: '2024-02-20',
      explanation: 'When galaxies collide, how many stars are born?  For AM1054-325, featured here in a recently released image by the Hubble Space Telescope, the answer is millions. Instead of stars being destroyed as galaxy AM1054-325 and a nearby galaxy circle each other, their gravity and motion has ignited stellar creation.  Star formation occurs rapidly in the gaseous debris stretching from AM1054-325’s yellowish body due to the other galaxy’s gravitational pull.  Hydrogen gas surrounding newborn stars glows pink.  Bright infant stars shine blue and cluster together in compact nurseries of thousands to millions of stars. AM1054-325 possesses over 100 of these intense-blue, dot-like star clusters, some appearing like a string of pearls.  Analyzing ultraviolet light helped determine that most of these stars are less than 10 million years old: stellar babies.  Many of these nurseries may grow up to be globular star clusters, while the bundle of young stars at the bottom tip may even detach and form a small galaxy.',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/AM1054_Hubble_2000.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'AM1054: Stars Form as Galaxies Collide',
      url: 'https://apod.nasa.gov/apod/image/2402/AM1054_Hubble_960.jpg'
    },
    {
      copyright: '\nDheera Venkatraman\n',
      date: '2024-02-21',
      explanation: 'The bird is bigger than the peak.  Nicknamed for its avian shape, the Seagull Nebula is an emission nebula on the night sky that is vast, spanning an angle over five times the diameter of the full moon and over 200 light years.  The head of the nebula is catalogued as IC 2177, and the star cluster under its right wing is catalogued as NGC 2343. Consisting of mostly red-glowing hydrogen gas, the Seagull Nebula incorporates some dust lanes and is forming stars.  The peak over which this Seagull seems to soar occurs at Pinnacles National Park in California, USA.  The featured image is a composite of long exposure images of the background sky and short exposure images of the foreground, all taken consecutively with the same camera and from the same location.    Explore Your Universe: Random APOD Generator',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/SeagullPinnacles_Venkatraman_2051.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Seagull Nebula over Pinnacles\' Peak',
      url: 'https://apod.nasa.gov/apod/image/2402/SeagullPinnacles_Venkatraman_960.jpg'
    },
    {
      copyright: 'Kyunghoon Lim',
      date: '2024-02-22',
      explanation: 'Big, bright, beautiful spiral, Messier 106 dominates this cosmic vista. The nearly two degree wide telescopic field of view looks toward the well-trained constellation Canes Venatici, near the handle of the Big Dipper. Also known as NGC 4258, M106 is about 80,000 light-years across and 23.5 million light-years away, the largest member of the Canes II galaxy group. For a far far away galaxy, the distance to M106 is well-known in part because it can be directly measured by tracking this galaxy\'s remarkable maser, or microwave laser emission. Very rare but naturally occurring, the maser emission is produced by water molecules in molecular clouds orbiting its active galactic nucleus. Another prominent spiral galaxy on the scene, viewed nearly edge-on, is NGC 4217 below and right of M106. The distance to NGC 4217 is much less well-known, estimated to be about 60 million light-years, but the bright spiky stars are in the foreground, well inside our own Milky Way galaxy.',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/M106field_KyunghoonLim2048.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'A View Toward M106',
      url: 'https://apod.nasa.gov/apod/image/2402/M106field_KyunghoonLim1024.jpg'
    },
    {
      copyright: 'Helge Buesing',
      date: '2024-02-23',
      explanation: 'This supernova shock wave plows through interstellar space at over 500,000 kilometers per hour. Centered and moving upward in the sharply detailed color composite its thin, bright, braided filaments are actually long ripples in a cosmic sheet of glowing gas seen almost edge-on. Discovered in the 1840s by Sir John Herschel, the narrow-looking nebula is sometimes known as Herschel\'s Ray. Cataloged as NGC 2736, its pointed appearance suggests its modern popular name, the Pencil Nebula. The Pencil Nebula is about 800 light-years away. Nearly 5 light-years long it represents only a small part of the Vela supernova remnant though. The enormous Vela remnant itself is around 100 light-years in diameter, the expanding debris cloud of a star that was seen to explode about 11,000 years ago. Initially, the section of the shock wave seen as the Pencil nebula was moving at millions of kilometers per hour but has slowed considerably, sweeping up surrounding interstellar material.',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/NGC2736_Helge_Buesing2048.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'The Pencil Nebula Supernova Shock Wave',
      url: 'https://apod.nasa.gov/apod/image/2402/NGC2736_Helge_Buesing1024.jpg'
    },
    {
      date: '2024-02-24',
      explanation: 'Intuitive Machines\' robotic lander Odysseus has accomplished the first U.S. landing on the Moon since the Apollo 17 mission in 1972. Launched on a SpaceX rocket on February 15, the phone booth sized lander reached lunar orbit on the 21st and touched down on the lunar surface at 6:23 pm ET on February 22nd. Its landing region is about 300 kilometers north of the Moon\'s south pole, near a crater designated Malapert A. Resting on its side, the lander is presently collecting solar power and transmitting data back to the Intuitive Machines\' mission control center in Houston. The mission marks the first commercial uncrewed landing on the Moon. Prior to landing, Odysseus’ camera captured this extreme wide angle image (landing legs visible at right) as it flew over Schomberger crater some 200 kilometers from its landing site. Odysseus was still about 10 kilometers above the lunar surface.',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/im-moon-imageFeb23_1024.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Odysseus to the Moon',
      url: 'https://apod.nasa.gov/apod/image/2402/im-moon-imageFeb23_1024.jpg'
    },
    {
      copyright: '\nHallgrimur P. Helgason;\n Rollover Annotation: \nJudy Schmidt\n',
      date: '2024-02-25',
      explanation: 'All of the other aurora watchers had gone home. By 3:30 am in Iceland, on a quiet September night, much of that night\'s auroras had died down. Suddenly, unexpectedly, a new burst of particles streamed down from space, lighting up the Earth\'s atmosphere once again. This time, surprisingly, pareidoliacally, the night lit up with an  amazing shape reminiscent of a giant phoenix. With camera equipment at the ready, two quick sky images were taken, followed immediately by a third of the land.  The mountain in the background is Helgafell, while the small foreground river is called Kaldá, both located about 30 kilometers north of Iceland\'s capital Reykjavík. Seasoned skywatchers will note that just above the mountain, toward the left, is the constellation of Orion, while the Pleiades star cluster is also visible just above the frame center.  The 2016 aurora, which lasted only a minute and was soon gone forever --  would possibly be dismissed as a fanciful fable -- were it not captured in the featured, digitally-composed, image mosaic.   Your Sky Surprise: What picture did APOD feature on your birthday? (post 1995)',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/PhoenixAurora_Helgason_3130.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'A Phoenix Aurora over Iceland',
      url: 'https://apod.nasa.gov/apod/image/2402/PhoenixAurora_Helgason_960.jpg'
    },
    {
      date: '2024-02-26',
      explanation: 'What if there were two moons in the sky -- and they eclipsed each other? This happens on Mars. The featured video shows a version of this unusual eclipse from space. Pictured are the two moons of Mars: the larger Phobos, which orbits closer to the red planet, and the smaller Deimos, which orbits further out. The sequence was captured last year by the ESA’s Mars Express, a robotic spacecraft that itself orbits Mars. A similar eclipse is visible from the Martian surface, although very rarely.  From the surface, though, the closer moon Phobos would appear to pass in front of farther moon Deimos. Most oddly, Phobos orbits Mars so close that it appears to move backwards when compared to Earth\'s Moon from Earth, rising in west and setting in the east. Phobos, the closer moon, orbits so close and so fast that it passes nearly overhead about three times a day.',
      media_type: 'video',
      service_version: 'v1',
      title: 'Martian Moon Eclipses Martian Moon',
      url: 'https://youtube.com/embed/hwQTH0IGrwE?rel=0'
    },
    {
      copyright: '\nStéphane Vetter\n(Nuits sacrées)\n',
      date: '2024-02-27',
      explanation: 'It\'s easy to get lost following the intricate, looping, and twisting filaments of supernova remnant Simeis 147.  Also cataloged as Sharpless 2-240, the filamentary nebula goes by the popular nickname the Spaghetti Nebula.  Seen toward the boundary of the constellations of the Bull (Taurus) and the Charioteer (Auriga), the impressive gas structure covers nearly 3 degrees on the sky, equivalent to 6 full moons. That\'s about 150 light-years at the stellar debris cloud\'s estimated distance of 3,000 light-years.  This composite image includes data taken through narrow-band filters isolating emission from hydrogen (red) and oxygen (blue) glowing gas. The supernova remnant has an estimated age of about 40,000 years, meaning light from this massive stellar explosion first reached the Earth when woolly mammoths roamed free.  Besides the expanding remnant, this cosmic catastrophe left behind a pulsar, a spinning neutron star that is the remnant of the original star\'s core.',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/Simeis147_Vetter_3000.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Supernova Remnant Simeis 147',
      url: 'https://apod.nasa.gov/apod/image/2402/Simeis147_Vetter_960.jpg'
    },
    {
      copyright: '\nDario Giannobile\n',
      date: '2024-02-28',
      explanation: 'How does the sky turn dark at night? In stages, and with different characteristic colors rising from the horizon. The featured image shows, left to right, increasingly late twilight times after sunset in 20 different vertical bands. The picture was taken last month in Syracuse, Sicily, Italy, in the direction opposite the Sun. On the far left is the pre-sunset upper sky.  Toward the right, prominent bands include the Belt of Venus, the Blue Band, the Horizon Band, and the Red Band. As the dark shadow of the Earth rises, the colors in these bands are caused by direct sunlight reflecting from air and aerosols in the Earth\'s atmosphere, multiple reflections sometimes involving a reddened sunset, and refraction. In practice, these bands can be diffuse and hard to discern, and their colors can depend on colors near the setting Sun. Finally, the Sun completely sets and the sky becomes dark. Don\'t despair -- the whole thing will happen in reverse when the Sun rises again in the morning.',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/TwilightShades_Giannobile_1600.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Shades of Night',
      url: 'https://apod.nasa.gov/apod/image/2402/TwilightShades_Giannobile_1080.jpg'
    },
    {
      date: '2024-02-29',
      explanation: 'In 46 BC Julius Caesar reformed the calendar system. Based on advice by astronomer Sosigenes of Alexandria, the Julian calendar included one leap day every four years to account for the fact that an Earth year is slightly more than 365 days long. In modern terms, the time it takes for the planet to orbit the Sun once is 365.24219 mean solar days. So if calendar years contained exactly 365 days they would drift from the Earth\'s year by about 1 day every 4 years and eventually July (named for Julius Caesar himself) would occur during the northern hemisphere winter. By adopting a leap year with an extra day every four years, the Julian calendar year would drift much less. In 1582 Pope Gregory XIII provided the further fine-tuning that leap days should not occur in years ending in 00, unless divisible by 400. This Gregorian Calendar system is the one in wide use today. Of course, tidal friction in the Earth-Moon system slows Earth\'s rotation and gradually lengthens the day by about 1.4 milliseconds per century. That means that leap days like today will not be necessary, about 4 million years from now. This Roman silver coin, a denarius, depicts Julius Caesar (left) and Venus, Roman goddess of love.',
      hdurl: 'https://apod.nasa.gov/apod/image/2402/CaesarCoin_Wikipedia_960.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Julius Caesar and Leap Days',
      url: 'https://apod.nasa.gov/apod/image/2402/CaesarCoin_Wikipedia_960.jpg'
    },
    {
      copyright: 'John Sarkissian',
      date: '2024-03-01',
      explanation: 'Murriyang, the CSIRO’s Parkes Radio Telescope, points toward a nearly Full Moon in this image from New South Wales, Australia, planet Earth. Bathed in moonlight, the 64 meter dish is receiving weak radio signals from Odysseus, following the robotic lander\'s February 22 touch down some 300 kilometers north of the Moon\'s south pole. The landing of Odysseus represents the first U.S. landing on the Moon since the Apollo 17 mission in 1972. Odysseus\' tilted orientation on the lunar surface prevents its high-gain antenna from pointing toward Earth. But the sensitivity of the large, steerable Parkes dish significantly improved the reception of data from the experiments delivered to the lunar surface by the robotic moon lander. Of course the Parkes Radio Telescope dish became famous for its superior lunar television reception during the Apollo 11 mission in 1969, allowing denizens of planet Earth to watch the first moonwalk.',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/The_Dish_Tracking_IM-1_22February2024_04.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Odysseus and The Dish',
      url: 'https://apod.nasa.gov/apod/image/2403/The_Dish_Tracking_IM-1_22February2024_04s.jpg'
    },
    {
      date: '2024-03-02',
      explanation: 'Methalox rocket engine firing, Odysseus\' landing legs absorb first contact with the lunar surface in this wide-angle snapshot from a camera on board the robotic Intuitive Machines Nova-C moon lander. Following the landing on February 22, broken landing legs, visible in the image, ultimately left the lander at rest but tilted. Odysseus\' gentle lean into a sloping lunar surface preserved the phone booth-sized lander\'s ability to operate, collect solar power, and return images and data to Earth. Its exact landing site in the Moon\'s far south polar region was imaged by NASA\'s Lunar Reconnaissance Orbiter. Donated by NASA, the American flag seen on the lander\'s central panel is 1970 Apollo program flight hardware.',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/IM_Odysseus_landing-2048x1118.png',
      media_type: 'image',
      service_version: 'v1',
      title: 'Odysseus on the Moon',
      url: 'https://apod.nasa.gov/apod/image/2403/IM_Odysseus_landing-1100x600.png'
    },
    {
      copyright: '\nJun Ho Oh (KAIST, \nHuboLab); \n Music: \nFlowing Air by \nMattia Vlad Morleo\n',
      date: '2024-03-03',
      explanation: 'How would you feel if the Sun disappeared? Many eclipse watchers across the USA surprised themselves in 2017 with the awe that they felt and the exclamations that they made as the Sun momentarily disappeared behind the Moon. Perhaps expecting just a brief moment of dusk, the spectacle of unusually rapid darkness, breathtakingly bright glowing beads around the Moon\'s edge, shockingly pink solar prominences, and a strangely detailed corona stretching across the sky caught many a curmudgeon by surprise.  Many of these attributes  were captured in the featured real-time, three-minute video of 2017\'s total solar eclipse. The video frames were acquired in  Warm Springs, Oregon with equipment specifically designed by Jun Ho Oh to track a close-up of the Sun\'s periphery during eclipse.  As the video ends, the Sun is seen being reborn on the other side of the Moon from where it departed.  Next month, on April 8th, a new total solar eclipse will be visible in a thin band across North America.',
      media_type: 'video',
      service_version: 'v1',
      title: 'A Total Solar Eclipse Close-Up in Real Time',
      url: 'https://www.youtube.com/embed/5D9j-8Vhyto?rel=0&showinfo=0'
    },
    {
      copyright: '\nN. D. Liao\n',
      date: '2024-03-04',
      explanation: 'What\'s happening across that field?  Pictured here are not auroras but nearby light pillars, a phenomenon typically much closer.   In most places on Earth, a lucky viewer can see a Sun pillar, a column of light appearing to extend up from the Sun caused by flat fluttering ice-crystals reflecting sunlight from the upper atmosphere.  Usually, these ice crystals evaporate before reaching the ground.  During freezing temperatures, however, flat fluttering ice crystals may form near the ground in a form of light snow  sometimes known as a crystal fog.  These ice crystals may then reflect ground lights in columns not unlike a Sun pillar.  The featured image was taken last month across the Wulan Butong Grasslands in Inner Mongolia, China.',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/PillarsMongolia_Liao_6240.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Light Pillars Over Inner Mongolia',
      url: 'https://apod.nasa.gov/apod/image/2403/PillarsMongolia_Liao_960.jpg'
    },
    {
      copyright: '\nDavid Moulton\n',
      date: '2024-03-05',
      explanation: 'Is this a painting or a photograph? In this celestial abstract art composed with a cosmic brush, dusty nebula NGC 2170, also known as the Angel Nebula, shines just above the image center. Reflecting the light of nearby hot stars, NGC 2170 is joined by other bluish reflection nebulae, a red emission region, many dark absorption nebulae, and a backdrop of colorful stars. Like the common household items that abstract painters often choose for their subjects, the clouds of gas, dust, and hot stars featured here are also commonly found in a setting like this one --  a massive, star-forming molecular cloud in the constellation of the Unicorn (Monoceros). The giant molecular cloud, Mon R2, is impressively close, estimated to be only 2,400 light-years or so away. At that distance, this canvas would be over 60 light-years across.',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/AngelNebula_Moulton_2516.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'NGC 2170: Angel Nebula Abstract Art',
      url: 'https://apod.nasa.gov/apod/image/2403/AngelNebula_Moulton_960.jpg'
    },
    {
      date: '2024-03-06',
      explanation: 'What kind of celestial object is this? A relatively normal galaxy -- but seen from its edge.  Many disk galaxies are actually just as thin as NGC 5866, the Spindle galaxy, pictured here, but are not seen edge-on from our vantage point.  A perhaps more familiar galaxy seen edge-on is our own Milky Way galaxy.  Also cataloged as M102, the Spindle galaxy has numerous and complex dust lanes appearing dark and red, while many of the bright stars in the disk give it a more blue underlying hue.  The blue disk of young stars can be seen in this Hubble image extending past the dust in the extremely thin galactic plane. There is evidence that the Spindle galaxy has cannibalized smaller galaxies over the past billion years or so, including multiple streams of faint stars, dark dust that extends away from the main galactic plane, and a surrounding group of galaxies (not shown).  In general, many disk galaxies become thin because the gas that forms them collides with itself as it rotates about the gravitational center. The Spindle galaxy lies about 50 million light years distant toward the constellation of the Dragon (Draco).',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/M102_HubbleEbrahimian_3615.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'M102: Edge-on Disk Galaxy',
      url: 'https://apod.nasa.gov/apod/image/2403/M102_HubbleEbrahimian_960.jpg'
    },
    {
      copyright: 'Michael Seeley',
      date: '2024-03-07',
      explanation: 'Not the James Webb Space Telescope\'s latest view of a distant galactic nebula, this cloud of gas and dust dazzled spacecoast skygazers on March 3. The telephoto snapshot was taken minutes after the launch of a Falcon 9 rocket on the SpaceX Crew-8 mission to the International Space Station. It captures plumes and exhaust from the separated first and second stages, a drifting Rorschach pattern in dark evening skies.  The bright spot near bottom center within the stunning terrestrial nebulosity is the second stage engine firing to carry 4 humans to space in the Crew Dragon spacecraft Endeavour. In sharp silhouette just above it is the Falcon 9 first stage booster orienting itself for return to a landing zone at Cape Canaveral, planet Earth. This reuseable first stage booster was making its first flight. But the Crew Dragon Endeavour capsule has flown humans to low Earth orbit and back again 4 times before. Endeavour, as a name for a spacecraft, has also seen reuse, christening retired Space Shuttle Endeavour and the Apollo 15 command module.',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/Crew-8image0.jpeg',
      media_type: 'image',
      service_version: 'v1',
      title: 'The Crew-8 Nebula',
      url: 'https://apod.nasa.gov/apod/image/2403/Crew-8image0_1024.jpeg'
    },
    {
      copyright: 'Robert Gendler',
      date: '2024-03-08',
      explanation: 'The Tarantula Nebula, also known as 30 Doradus, is more than a thousand light-years in diameter, a giant star forming region within nearby satellite galaxy the Large Magellanic Cloud. About 180 thousand light-years away, it\'s the largest, most violent star forming region known in the whole Local Group of galaxies. The cosmic arachnid sprawls across this magnificent view, an assembly of image data from large space- and ground-based telescopes. Within the Tarantula (NGC 2070), intense radiation, stellar winds, and supernova shocks from the central young cluster of massive stars cataloged as R136 energize the nebular glow and shape the spidery filaments. Around the Tarantula are other star forming regions with young star clusters, filaments, and blown-out bubble-shaped clouds. In fact, the frame includes the site of the closest supernova in modern times, SN 1987A, at lower right. The rich field of view spans about 2 degrees or 4 full moons in the southern constellation Dorado. But were the Tarantula Nebula closer, say 1,500 light-years distant like the Milky Way\'s own star forming Orion Nebula, it would take up half the sky.',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/Tarantula-HST-ESO-Webb-LL.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'The Tarantula Zone',
      url: 'https://apod.nasa.gov/apod/image/2403/Tarantula-HST-ESO-Webb-SS1024.jpg'
    },
    {
      copyright: 'Petr Horálek',
      date: '2024-03-09',
      explanation: 'As spring approaches for northern skygazers, Comet 12P/Pons-Brooks is growing brighter. Currently visible with small telescopes and binoculars, the Halley-type comet could reach naked eye visibility in the coming weeks. Seen despite a foggy atmosphere, the comet\'s green coma and long tail hover near the horizon in this well-composed deep night skyscape from Revuca, Slovakia recorded on March 5. M31, also known as the Andromeda galaxy, and bright yellowish star Mirach, beta star of the constellation Andromeda, hang in the sky above the comet. The Andromeda galaxy is some 2.5 million light-years beyond the Milky Way. Comet Pons-Brooks is a periodic visitor to the inner Solar System and less than 14 light-minutes away. Reaching its perihelion on April 21, this comet should be visible in the sky during the April 8 total solar eclipse.',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/2024_03_05_Pons-Brooks_Revuca_1500px.png',
      media_type: 'image',
      service_version: 'v1',
      title: 'Comet Pons-Brooks in Northern Spring',
      url: 'https://apod.nasa.gov/apod/image/2403/2024_03_05_Pons-Brooks_Revuca_1200px.png'
    },
    {
      copyright: '\nFred Bruenjes\n(moonglow.net)\n',
      date: '2024-03-10',
      explanation: 'Would you go to the end of the world to see a total eclipse of the Sun? If you did, would you be surprised to find someone else there already? In 2003, the Sun, the Moon, Antarctica, and two photographers all lined up in Antarctica during an unusual total solar eclipse.  Even given the extreme location, a group of enthusiastic eclipse chasers ventured near the bottom of the world to experience the surreal momentary disappearance of the Sun behind the Moon.  One of the treasures collected was the featured picture -- a composite of four separate images digitally combined to realistically simulate how the adaptive human eye saw the eclipse.  As the image was taken, both the Moon and the Sun peeked together over an Antarctic ridge.  In the sudden darkness, the magnificent corona of the Sun became visible around the Moon.  Quite by accident, another photographer was caught in one of the images checking his video camera.   Visible to his left are an equipment bag and a collapsible chair.  A more easily visible solar eclipse will occur in just under four weeks and be visible from a long, thin swath of North America.',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/AntarcticEclipse_bruenjes_960.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'A Total Eclipse at the End of the World',
      url: 'https://apod.nasa.gov/apod/image/2403/AntarcticEclipse_bruenjes_960.jpg'
    },
    {
      copyright: '\nPetr Horálek /\nInstitute of Physics in Opava\n',
      date: '2024-03-11',
      explanation: 'What glows in the night? This night featured a combination of usual and unusual glows. Perhaps the most usual glow was from the Moon, a potentially familiar object. The full Moon\'s nearly vertical descent results from the observer being near Earth\'s equator. As the Moon sets, air and aerosols in Earth\'s atmosphere preferentially scatter out blue light, making the Sun-reflecting satellite appear reddish when near the horizon.                                                                        Perhaps the most unusual glow was from the bioluminescent plankton, likely less familiar objects. These microscopic creatures glow blue, it is thought, primarily to surprise and deter predators. In this case, the glow was caused primarily by plankton-containing waves crashing onto the beach. The image was taken on Soneva Fushi Island, Maldives just over one year ago.   Your Sky Surprise: What picture did APOD feature on your birthday? (post 1995)',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/FullPlantonMoon_Horalek_1022.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'A Full Plankton Moon',
      url: 'https://apod.nasa.gov/apod/image/2403/FullPlantonMoon_Horalek_1022.jpg'
    },
    {
      copyright: '\nSeung Hye Yang\n',
      date: '2024-03-12',
      explanation: 'What\'s that over the horizon? What may look like a strangely nearby galaxy is actually a normal rocket\'s exhaust plume -- but unusually backlit.  Although the SpaceX Falcon 9 rocket was launched from Vandenberg Space Force Base in California, USA, its burned propellant was visible over a much wider area, with the featured photograph being taken from Akureyri, Iceland. The huge spaceship was lifted off a week ago, and the resulting spectacle was captured soon afterward with a single 10-second smartphone exposure, before it quickly dissipated. Like noctilucent clouds, the plume\'s brightness is caused by the Twilight Effect, where an object is high enough to be illuminated by the twilight Sun, even when the observer on the ground experiences the darkness of night. The spiral shape is caused by the Falcon  rocket reorienting to release satellites in different directions. Stars and faint green and red aurora appear in the background of this extraordinary image.',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/RocketSpiral_Yang_3024.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'A Galaxy-Shaped Rocket Exhaust Spiral',
      url: 'https://apod.nasa.gov/apod/image/2403/RocketSpiral_Yang_960.jpg'
    },
    {
      copyright: '\nGianni Lacroce\n',
      date: '2024-03-13',
      explanation: 'A broad expanse of glowing gas and dust presents a bird-like visage to astronomers from planet Earth, suggesting its popular moniker: the Seagull Nebula. This portrait of the cosmic bird covers a 2.5-degree wide swath across the plane of the Milky Way, near the direction of Sirius, alpha star of the constellation of the Big Dog (Canis Major). Of course, the region includes objects with other catalog designations: notably NGC 2327, a compact, dusty emission and reflection nebula with an embedded massive star that forms the bird\'s head. Likely part of a larger shell structure swept up by successive supernova explosions, the broad Seagull Nebula is cataloged as Sh2-296 and IC 2177. The prominent bluish arc below and right of center is a bow shock from runaway star FN Canis Majoris. Dominated by the reddish glow of atomic hydrogen, this complex of gas and dust clouds with other stars of the Canis Majoris OB1 association spans over 200 light-years at the Seagull Nebula\'s estimated 3,800 light-year distance.   Almost Hyperspace: Random APOD Generator',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/Seagull_Lacroce_2048.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'The Seagull Nebula',
      url: 'https://apod.nasa.gov/apod/image/2403/Seagull_Lacroce_1080.jpg'
    },
    {
      copyright: 'El Cielo de Canarias',
      date: '2024-03-14',
      explanation: 'What phase of the Moon is 3.14 radians from the Sun? The Full Moon, of course. Even though the Moon might look full for several days, the Moon is truly at its full phase when it is Pi radians (aka 180 degrees) from the Sun in ecliptic longitude. That\'s opposite the Sun in planet Earth\'s sky. Rising as the Sun set on March 9, 2020, only an hour or so after the moment of its full phase, this orange tinted and slightly flattened Moon still looked full. It was photographed opposite the setting Sun from Teide National Park on the Canary Island of Tenerife. Also opposite the setting Sun, seen from near the Teide volcano peak about 3,500 meters above sea level, is the mountain\'s rising triangular shadow extending into Earth\'s dense atmosphere. Below the distant ridge line on the left are the white telescope domes of Teide Observatory. Again Pi radians from the Sun, on March 25 the Full Moon will dim slightly as it glides through Earth\'s outer shadow in a penumbral lunar eclipse.',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/MoonriseShadowDLopez_1.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Moon Pi and Mountain Shadow',
      url: 'https://apod.nasa.gov/apod/image/2403/MoonriseShadowDLopez_1024.jpg'
    },
    {
      copyright: 'Dave Doctor',
      date: '2024-03-15',
      explanation: 'Big, beautiful spiral galaxy NGC 1055 is a dominant member of a small galaxy group a mere 60 million light-years away toward the aquatically intimidating constellation Cetus. Seen edge-on, the island universe spans over 100,000 light-years, a little larger than our own Milky Way galaxy. The colorful, spiky stars decorating this cosmic portrait of NGC 1055 are in the foreground, well within the Milky Way. But the telltale pinkish star forming regions are scattered through winding dust lanes along the distant galaxy\'s thin disk. With a smattering of even more distant background galaxies, the deep image also reveals a boxy halo that extends far above and below the central bulge and disk of NGC 1055. The halo itself is laced with faint, narrow structures, and could represent the mixed and spread out debris from a satellite galaxy disrupted by the larger spiral some 10 billion years ago.',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/Image133k_n1055.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Portrait of NGC 1055',
      url: 'https://apod.nasa.gov/apod/image/2403/Image133k_n1055_1024.jpg'
    },
    {
      date: '2024-03-16',
      explanation: 'The southern winter Milky Way sprawls across this night skyscape. Looking due south, the webcam view was recorded near local midnight on March 11 in dry, dark skies over the central Chilean Atacama desert. Seen below the graceful arc of diffuse starlight are satellite galaxies of the mighty Milky Way, also known as the Large and Small Magellanic clouds. In the foreground is the site of the European Southern Observatory\'s 40-metre-class Extremely Large Telescope (ELT). Under construction at the 3000 metre summit of Cerro Armazones, the ELT is on track to become planet Earth\'s biggest Eye on the Sky.',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/ELT_2024-03-13_2048.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'ELT and the Milky Way',
      url: 'https://apod.nasa.gov/apod/image/2403/ELT_2024-03-13_1024.jpg'
    },
    {
      date: '2024-03-17',
      explanation: 'Is this galaxy jumping through a giant ring of stars?  Probably not.  Although the precise dynamics behind the featured image is yet unclear, what is clear is that the pictured galaxy, NGC 7714, has been stretched and distorted by a recent collision with a neighboring galaxy. This smaller neighbor, NGC 7715, situated off to the left of the frame, is thought to have charged right through NGC 7714. Observations indicate that the golden ring pictured is composed of millions of older Sun-like stars that are likely co-moving with the interior bluer stars. In contrast, the bright center of NGC 7714 appears to be undergoing a burst of new star formation.  The featured image was captured by the Hubble Space Telescope.  NGC 7714 is located about 130 million light years away toward the constellation of the Two Fish (Pisces).  The interactions between these galaxies likely started about 150 million years ago and should continue for several hundred million years more, after which a single central galaxy may result.',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/Ngc7714_HubblePohl_2048.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'NGC 7714: Starburst after Galaxy Collision',
      url: 'https://apod.nasa.gov/apod/image/2403/Ngc7714_HubblePohl_1080.jpg'
    },
    {
      copyright: '\nJan Erik Vallestad\n',
      date: '2024-03-18',
      explanation: 'A bright comet will be visible during next month\'s total solar eclipse.  This very unusual coincidence occurs because Comet 12P/Pons-Brooks\'s return to the inner Solar System places it by chance only 25 degrees away from the Sun during Earth\'s April 8 total solar eclipse.  Currently the comet is just on the edge of visibility to the unaided eye, best visible with binoculars in the early evening sky toward the constellation of the Fish (Pisces). Comet Pons-Brooks, though, is putting on quite a show for deep camera images even now.  The featured image is a composite of three very specific colors, showing the comet\'s ever-changing ion tail in light blue, its outer coma in green, and highlights some red-glowing gas around the coma in a spiral. The spiral is thought to be caused by gas being expelled by the slowly rotating nucleus of the giant iceberg comet. Although it is always difficult to predict the future brightness of comets, Comet Pons-Brook has been particularly prone to outbursts, making it even more difficult to predict how bright it will actually be as the Moon moves in front of the Sun on April 8.   Total Eclipse Info: 2024 Total Solar Eclipse from NASA',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/CometPonsBrook_Vallestad_2564.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Comet Pons-Brooks\' Swirling Coma',
      url: 'https://apod.nasa.gov/apod/image/2403/CometPonsBrook_Vallestad_960.jpg'
    },
    {
      copyright: '\nAlan Dyer, Amazingsky.com,\nTWAN\n',
      date: '2024-03-19',
      explanation: 'What\'s that at the end of the road? The Sun. Many towns have roads that run east-west, and on two days each year, the Sun rises and sets right down the middle. Today, in some parts of the world (tomorrow in others), is one of those days: an equinox.  Not only is this a day of equal night ("aequus"-"nox") and day time, but also a day when the sun rises precisely to the east and sets due west. Displayed here is a picturesque rural road in Alberta, Canada that runs approximately east-west. The featured image was taken during the September Equinox of 2021, but the geometry remains the same every year.  In many cultures, this March equinox is taken to be the first day of a season, typically spring in Earth\'s northern hemisphere, and autumn in the south. Does your favorite street run east-west? Tonight, at sunset, you can find out with a quick glance.',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/EquinoxSunset_Dyer_1701.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'A Picturesque Equinox Sunset',
      url: 'https://apod.nasa.gov/apod/image/2403/EquinoxSunset_Dyer_960.jpg'
    },
    {
      copyright: '\nMike Selby\n',
      date: '2024-03-20',
      explanation: 'Across the heart of the Virgo Galaxy Cluster lies a string of galaxies known as Markarian\'s Chain. Prominent in Markarian\'s Chain are these two interacting galaxies, NGC 4438 (left) and NGC 4435 - also known as The Eyes. About 50 million light-years away, the two galaxies appear to be about 100,000 light-years apart in this sharp close-up, but have likely approached to within an estimated 16,000 light-years of each other in their cosmic past. Gravitational tides from the close encounter have ripped away at their stars, gas, and dust. The more massive NGC 4438 managed to hold on to much of the material torn out in the collision, while material from the smaller NGC 4435 was more easily lost. The remarkably deep image of this crowded region of the universe also includes many more distant background galaxies.',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/Ngc4438_Selby_2068.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'The Eyes in Markarian\'s Galaxy Chain',
      url: 'https://apod.nasa.gov/apod/image/2403/Ngc4438_Selby_960.jpg'
    },
    {
      copyright: 'Steve Cannistra',
      date: '2024-03-21',
      explanation: 'This popular group leaps into the early evening sky around the March equinox and the northern hemisphere spring.  Famous as the Leo Triplet, the three magnificent galaxies found in the prominent constellation Leo gather here in one astronomical field of view. Crowd pleasers when imaged with even modest telescopes, they can be introduced individually as NGC 3628 (left), M66 (bottom right), and M65 (top). All three are large spiral galaxies but tend to look dissimilar, because their galactic disks are tilted at different angles to our line of sight. NGC 3628, also known as the Hamburger Galaxy, is temptingly seen edge-on, with obscuring dust lanes cutting across its puffy galactic plane. The disks of M66 and M65 are both inclined enough to show off their spiral structure.  Gravitational interactions between galaxies in the group have left telltale signs, including the tidal tails and warped, inflated disk of NGC 3628 and the drawn out spiral arms of M66. This gorgeous view of the region spans over 1 degree (two full moons) on the sky in a frame that covers over half a million light-years at the trio\'s estimated distance of 30 million light-years.',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/leotripletasi294large.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'The Leo Trio',
      url: 'https://apod.nasa.gov/apod/image/2403/leotripletasi294large1024.jpg'
    },
    {
      date: '2024-03-22',
      explanation: 'A tiny moon with a scary name, Phobos emerges from behind the Red Planet in this timelapse sequence from the Earth-orbiting Hubble Space Telescope. Over 22 minutes the 13 separate exposures were captured near the 2016 closest approach of Mars to planet Earth. Martians have to look to the west to watch Phobos rise, though. The small moon is closer to its parent planet than any other moon in the Solar System, about 3,700 miles (6,000 kilometers) above the Martian surface. It completes one orbit in just 7 hours and 39 minutes. That\'s faster than a Mars rotation, which corresponds to about 24 hours and 40 minutes. As a result, seen from the surface of Mars speeding Phobos rises above the western horizon 2 times in a Martian day. Still, Phobos is doomed.',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/STSCI-MarsPhobosComp3000.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Phobos: Moon over Mars',
      url: 'https://apod.nasa.gov/apod/image/2403/STSCI-MarsPhobosComp1024.jpg'
    },
    {
      date: '2024-03-23',
      explanation: 'This close-up from the Mars Reconnaissance Orbiter\'s HiRISE camera shows weathered craters and windblown deposits in southern Acidalia Planitia. A striking shade of blue in standard HiRISE image colors, to the human eye the area would probably look grey or a little reddish. But human eyes have not gazed across this terrain, unless you count the eyes of NASA astronauts in the sci-fi novel, "The Martian", by Andy Weir. The novel chronicles the adventures of Mark Watney, an astronaut stranded at the fictional Mars mission Ares 3 landing site, corresponding to the coordinates of this cropped HiRISE frame. For scale, Watney\'s 6-meter-diameter habitat at the site would be about 1/10th the diameter of the large crater. Of course, the Ares 3 landing coordinates are only about 800 kilometers north of the (real life) Carl Sagan Memorial Station, the 1997 Pathfinder landing site.',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/PIA19363.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Ares 3 Landing Site: The Martian Revisited',
      url: 'https://apod.nasa.gov/apod/image/2403/PIA19363_1024.jpg'
    },
    {
      copyright: 'CNES\n',
      date: '2024-03-24',
      explanation: 'Here is what the Earth looks like during a solar eclipse. The shadow of the Moon can be seen darkening part of Earth. This shadow moved across the Earth at nearly 2000 kilometers per hour. Only observers near the center of the dark circle see a total solar eclipse - others see a partial eclipse where only part of the Sun appears blocked by the Moon. This spectacular picture of the 1999 August 11 solar eclipse was one of the last ever taken from the Mir space station. The two bright spots that appear on the upper left are thought to be Jupiter and Saturn. Mir was deorbited in a controlled re-entry in 2001. A new solar eclipse will occur over North America in about two weeks.',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/eclipse99_mir_960.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Looking Back at an Eclipsed Earth',
      url: 'https://apod.nasa.gov/apod/image/2403/eclipse99_mir_960.jpg'
    },
    {
      date: '2024-03-25',
      explanation: 'What does a supernova remnant sound like? Although sound is a compression wave in matter and does not carry into empty space, interpretive sound can help listeners appreciate and understand a visual image of a supernova remnant in a new way. Recently, the Jellyfish Nebula (IC 443) has been sonified quite creatively.  In the featured sound-enhanced video, when an imaginary line passes over a star, the sound of a drop falling into water is played, a sound particularly relevant to the nebula\'s aquatic namesake.  Additionally, when the descending line crosses gas that glows red, a low tone is played, while green sounds a middle tone, and blue produces a tone with a relatively high pitch. Light from the supernova that created the Jellyfish Nebula left approximately 35,000 years ago, when humanity was in the stone age.  The nebula will slowly disperse over the next million years, although the explosion also created a dense neutron star which will remain indefinitely.',
      media_type: 'video',
      service_version: 'v1',
      title: 'Sonified: The Jellyfish Nebula Supernova Remnant',
      url: 'https://youtube.com/embed/NqBfQeJqkfU?rel=0'
    },
    {
      date: '2024-03-26',
      explanation: 'Comet Pons-Brooks has quite a tail to tell.  First discovered in 1385, this erupting dirty snowball loops back into our inner Solar System every 71 years and, this time, is starting to put on a show for deep camera exposures.  In the featured picture, the light blue stream is the ion tail which consists of charged molecules pushed away from the comet\'s nucleus by the solar wind.  The ion tail, shaped by the Sun\'s wind and the comet\'s core\'s rotation, always points away from the Sun.  Comet 12P/Pons–Brooks is now visible with binoculars in the early evening sky toward the northwest, moving perceptibly from night to night.  The frequently flaring comet is expected to continue to brighten, on the average, and may even become visible with the unaided eye --  during the day -- to those in the path of totality of the coming solar eclipse on April 8.',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/CometPons_Peirce_5119.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Comet Pons-Brooks\' Ion Tail',
      url: 'https://apod.nasa.gov/apod/image/2403/CometPons_Peirce_1080.jpg'
    },
    {
      copyright: '\nJoe Hua\n',
      date: '2024-03-27',
      explanation: 'Almost every object in the featured photograph is a galaxy.  The Coma Cluster of Galaxies pictured here is one of the densest clusters known - it contains thousands of galaxies.  Each of these galaxies houses billions of stars - just as our own Milky Way Galaxy does.  Although nearby when compared to most other clusters, light from the Coma Cluster still takes hundreds of millions of years to reach us.  In fact, the Coma Cluster is so big it takes light millions of years just to go from one side to the other.  Most galaxies in Coma and other clusters are ellipticals, while most galaxies outside of clusters are spirals.  The nature of Coma\'s X-ray emission is still being investigated.',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/ComaCluster_Hua_960.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'The Coma Cluster of Galaxies',
      url: 'https://apod.nasa.gov/apod/image/2403/ComaCluster_Hua_960.jpg'
    },
    {
      copyright: '\nMassimo Di Fusco',
      date: '2024-03-28',
      explanation: 'Globular star cluster Omega Centauri, also known as NGC 5139, is 15,000 light-years away. The cluster is packed with about 10 million stars much older than the Sun within a volume about 150 light-years in diameter. It\'s the largest and brightest of 200 or so known globular clusters that roam the halo of our Milky Way galaxy. Though most star clusters consist of stars with the same age and composition, the enigmatic Omega Cen exhibits the presence of different stellar populations with a spread of ages and chemical abundances. In fact, Omega Cen may be the remnant core of a small galaxy merging with the Milky Way. With a yellowish hue, Omega Centauri\'s red giant stars are easy to pick out in this sharp, color telescopic view.',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/NGC5139_mdf.png',
      media_type: 'image',
      service_version: 'v1',
      title: 'Millions of Stars in Omega Centauri',
      url: 'https://apod.nasa.gov/apod/image/2403/NGC5139_mdf1024.png'
    },
    {
      date: '2024-03-29',
      explanation: 'Looping through the Jovian system in the late 1990s, the Galileo spacecraft recorded stunning views of Europa and uncovered evidence that the moon\'s icy surface likely hides a deep, global ocean. Galileo\'s Europa image data has been remastered here, with improved calibrations to produce a color image approximating what the human eye might see. Europa\'s long curving fractures hint at the subsurface liquid water.  The tidal flexing the large moon experiences in its elliptical orbit around Jupiter supplies the energy to keep the ocean liquid. But more tantalizing is the possibility that even in the absence of sunlight that process could also supply the energy to support life, making Europa one of the best places to look for life beyond Earth. The Juno spacecraft currently in Jovian orbit has also made repeated flybys of the water world, returning images along with data exploring Europa\'s habitability. This October will see the launch of the NASA\'s Europa Clipper on a voyage of exploration. The spacecraft will make nearly 50 flybys, approaching to within 25 kilometers of Europa\'s icy surface.',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/PIA19048europa.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Galileo\'s Europa',
      url: 'https://apod.nasa.gov/apod/image/2403/PIA19048europa1024.jpg'
    },
    {
      copyright: 'Library of Melk Abbey, Frag. 229\n\n',
      date: '2024-03-30',
      explanation: 'Discovered by accident, this manuscript page provides graphical insight to astronomy in medieval times, before the Renaissance and the influence of Nicolaus Copernicus, Tycho Brahe, Johannes Kepler, and Galileo. The intriguing page is from lecture notes on astronomy compiled by the monk Magister Wolfgang de Styria before the year 1490. The top panels clearly illustrate the necessary geometry for a lunar (left) and solar eclipse in the Earth-centered Ptolemaic system. At lower left is a diagram of the Ptolemaic view of the Solar System with text at the upper right to explain the movement of the planets according to Ptolemy\'s geocentric model. At the lower right is a chart to calculate the date of Easter Sunday in the Julian calendar. The illustrated manuscript page was found at historic Melk Abbey in Austria.',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/medieval_fragment50p.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Medieval Astronomy from Melk Abbey',
      url: 'https://apod.nasa.gov/apod/image/2403/medieval_fragmentW600.jpg'
    },
    {
      copyright: '\nPetr Horálek\n(ESO\nPhoto Ambassador,\nInst. of Physics in Opava) ;\n Acknowledgement: \nXavier Jubier\n',
      date: '2024-03-31',
      explanation: 'In late 2021 there was a total solar eclipse visible only at the end of the Earth.  To capture the unusual phenomenon, airplanes took flight below the clouded seascape of Southern Ocean. The featured image shows one relatively spectacular capture where the bright spot is the outer corona of the Sun and the eclipsing Moon is seen as the dark spot in the center.  A wing and engine of the airplane are visible across the left and bottom of the image, while another airplane observing the eclipse is visible on the far left. The dark area of the sky surrounding the eclipsed Sun is called a shadow cone. It is dark because you are looking down a long corridor of air shadowed by the Moon. A careful inspection of the eclipsed Sun will reveal the planet Mercury just to the right. You won\'t have to travel to the end of the Earth to see the next total solar eclipse. The total eclipse path will cross North America on 2024 April 8, just over one week from today.   NASA Coverage: Total Solar Eclipse of 2024 April 8',
      hdurl: 'https://apod.nasa.gov/apod/image/2403/EclipseAntarctica_Horalek_1500.jpg',
      media_type: 'image',
      service_version: 'v1',
      title: 'Total Solar Eclipse Below the Bottom of the World',
      url: 'https://apod.nasa.gov/apod/image/2403/EclipseAntarctica_Horalek_1080.jpg'
    }
  ]

export default sampleData;