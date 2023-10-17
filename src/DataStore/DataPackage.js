import React, { createContext, useState } from 'react'
// import Bollywood from '../Component/Bollywood';
// import Hollywood from '../Component/Hollywood';
// import Technology from '../Component/Technology';
// import Fitness from '../Component/Fitness';
// import Food from '../Component/Food';

export const MyContext=createContext();
function DataPackage(props) {
  const[data,setData]=useState([
    {     
          category:"Hollywood",
          id:1,
          title: "'Cyberpunk 2077: Phantom Liberty' will take you back to Night City on September 26th",
          description: "Major Hollywood stars are coming out to play during Summer Game Fest. After Nicolas Cage showed up at the opening keynote to discuss his role in Dead by Daylight, Keanu Reeves appeared at the Xbox Games Showcase to present the trailer for Cyberpunk 2077: Phan…",
          url: "https://www.engadget.com/cyberpunk-2077-phantom-liberty-will-take-you-back-to-night-city-on-september-26th-181652972.html",
          urlToImage: "https://i.guim.co.uk/img/media/639c9ac42f644d8beb4dddf17548afdb1236fad3/486_2_3846_2309/master/3846.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=cc4d7d9985009217153c5db108a193d7",
          publishedAt: "2023-06-11T18:16:52Z",
          content: "Major Hollywood stars are coming out to play during Summer Game Fest. After Nicolas Cage showed up at the opening keynote to discuss his role in Dead by Daylight, Keanu Reeves appeared at the Xbox Ga… [+1162 chars]"
    },
    {
          category:"Hollywood",
          id:2,
          title: "An Oral History of Jurassic Park: The Ride",
          description: "When it opened at Universal Studios Hollywood in 1996, it was the single most expensive thrill ride of all time. A look back at whether it was all worth it.",
          url: "https://www.wired.com/story/jurassic-park-the-ride-oral-history/",
          urlToImage: "https://media.npr.org/assets/img/2023/06/06/img_2156_wide-fb9f854839caaa04005190b2bedbc7f5be2c0e6c-s1400-c100.jpeg",
          publishedAt: "2023-06-09T11:00:00Z",
          content: "We went to the Jurassic Park book and realized there was a scene where the kids were trying to escape the dinosaurs by getting on a log and floating down the river. We thought, Wow, maybe this is our… [+3030 chars]"
    },
    {
          category:"Hollywood",
          id:3,
          title: "Apple Ghosts the Generative AI Revolution",
          description: "Apple unveiled the Vision Pro headset and a number of AI-powered features yesterday, but largely ignored generative AI applications embraced by Google and Microsoft.",
          url: "https://www.wired.com/story/apple-ghosts-the-generative-ai-revolution/",
          urlToImage: "https://i.insider.com/647ebb9440bf000019fa4a64?width=1200&format=jpeg",
          publishedAt: "2023-06-06T11:00:00Z",
          content: "After years of anticipation and contributions from thousands of people, Apple Vision Pro made its debut yesterday, promising immersion in apps, games, movies, and the workplace. With more than 20 cam… [+2920 chars]"
    },
    {
          category:"Hollywood",
          id:4,
          title: "How Christopher Nolan Learned to Stop Worrying and Love AI",
          description: "The Oppenheimer director says AI is not the bomb. His new movie might still scare you shitless.",
          url: "https://www.wired.com/story/christopher-nolan-oppenheimer-ai-apocalypse/",
          urlToImage: "https://media.npr.org/assets/img/2023/06/02/gettyimages-1412738380_wide-e0e18c5340a314b2ce611d97ec5a69ddf4cd6ab6-s1400-c100.jpg",
          publishedAt: "2023-06-20T10:00:00Z",
          content: "When wired heard that Christopher Nolan and his producerand wifeEmma Thomas were coming out with a biopic of J. Robert Oppenheimer, we were perplexed. At least for a moment. It is hard for WIRED to r… [+3036 chars]"
    },
    {
          category:"Hollywood",
          id:5,
          title: "How the Sound Team behind 'Diablo IV' Brought Hell to Life",
          description: "Sound designers have a difficult job to make otherworldly beasts and supernatural vistas seem real to gamers. Luckily, they have pomegranates.",
          url: "https://www.wired.com/story/diablo-4-sound-design-interview/",
          urlToImage: "https://media.npr.org/assets/img/2023/06/21/kennedy-honors_wide-99f803afe664ff00a6943bc4e39eef343c35ac4a-s1400-c100.jpg",
          publishedAt: "2023-06-05T20:04:07Z",
          content: "the sound team for Diablo IV needed to determine what a Treasure Beast might sound like. In the fiction, it's a massive, taurus-headed behemothcomplete with rows of yellowed porpoise-like teeth and a… [+2814 chars]"
    },
    {
          category:"Hollywood",
          id:6,
          title: "Apple Vision Pro Hands On: The Opposite of Disappearing",
          description: "The mixed reality headset is the company’s most surprising product in years. Is that a good thing?",
          url: "https://www.wired.com/story/apple-vision-pro-hands-on-demo/",
          urlToImage: "https://images.macrumors.com/t/8o4hyZvnOc6e0IvT_du0kDBaq0o=/1600x/article-new/2023/06/mira-mario-kart-ride-universal.jpg",
          publishedAt: "2023-06-06T02:40:53Z",
          content: "The battery pack.\r\nPhotograph: Philip Pacheco/Getty Images\r\nI assumed this external battery pack meant the headset itself would feel as light as a feather, but it still felt hefty. Once I adjusted bo… [+5085 chars]"
    },
    {
          category:"Hollywood",
          id:7,
          title: "Black Mirror’s ‘Mazey Day’ is a brisk, bloody bite of celebrity crisis",
          description: "In season 6 of Black Mirror on Netflix, the episode “Mazey Day” explores the relationship between Hollywood stars and the paparazzi who chase them.",
          url: "https://www.theverge.com/23763326/black-mirror-mazey-day-review-season-6-netflix",
          urlToImage: "https://cdn.vox-cdn.com/thumbor/u0dlmNN9HBAuMSmV2qCIC4A_PLQ=/0x0:3840x1920/1200x628/filters:focal(1920x960:1921x961)/cdn.vox-cdn.com/uploads/chorus_asset/file/24732122/Black_Mirror_n_S6_E4_00_17_59_07.png",
          publishedAt: "2023-06-16T16:35:13Z",
          content: "Black Mirrors Mazey Day is a brisk, bloody bite of celebrity crisis\r\nBlack Mirrors Mazey Day is a brisk, bloody bite of celebrity crisis\r\n / A fast-paced story of paparazzi and the stars they chase t… [+3298 chars]"
    },
    {
          category:"Hollywood",
          id:8,
          title: "Disney delays a pantheon of Marvel, Star Wars, and Avatar movies",
          description: "Disney is delaying many of its upcoming Marvel, Star Wars, and Avatar movies in part because of production delays caused by the Writers Guild of America strike. The next Deadpool movie is coming out sooner than planned, though.",
          url: "https://www.theverge.com/2023/6/13/23759482/disney-delays-marvel-avatar-star-wars-movies",
          urlToImage: "https://cdn.vox-cdn.com/thumbor/odBRC5CX0zU0QvfLg7PBSDjeclQ=/0x0:2048x858/1200x628/filters:focal(458x370:459x371)/cdn.vox-cdn.com/uploads/chorus_asset/file/9855501/LastJediReyLightsaber.jpg",
          publishedAt: "2023-06-13T16:36:03Z",
          content: "Disney delays a pantheon of Marvel, Star Wars, and Avatar movies\r\nDisney delays a pantheon of Marvel, Star Wars, and Avatar movies\r\n / However, the next Deadpool movie will be coming out a bit sooner… [+2024 chars]"
    },
    {
          category:"Hollywood",
          id:9,
          title: "Tom Holland Suggests There's an Idea in Place for Spider-Man 4",
          description: "The end of Spider-Man: No Way Home teased a whole new chapter in the life of Peter Parker. With his secret identity now secret once again, he’s free to go back to being both Spider-Man and Peter, even if that means his friends and loved ones don’t know who he…",
          url: "https://gizmodo.com/spiderman-4-tom-holland-marvel-studios-sony-kevin-feige-1850539512",
          urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/aa99b2a0198c9d2b3d88e31eba24fedd.jpg",
          publishedAt: "2023-06-14T19:30:00Z",
          content: "The end of Spider-Man: No Way Home teased a whole new chapter in the life of Peter Parker. With his secret identity now secret once again, hes free to go back to being both Spider-Man and Peter, even… [+2256 chars]"
    },
    {
          category:"Hollywood",
          id:10,
          title: "Directors union reaches tentative deal with Hollywood studios",
          description: "Agreement comes as writers remain on strike and actors are currently holding a strike authorization voteThe Directors Guild of America (DGA) which represents film and television directors announced late Saturday that it had reached a tentative agreement with …",
          url: "https://www.theguardian.com/culture/2023/jun/04/hollywood-directors-union-studios-reach-tentative-deal",
          urlToImage: "https://i.guim.co.uk/img/media/26770e692e1e574e8e4ef796a2d8c8cabe0d4241/0_0_4800_2880/master/4800.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=743f47adc0e27d0c02bd39a713d238ad",
          publishedAt: "2023-06-04T18:46:20Z",
          content: "The Directors Guild of America (DGA) which represents film and television directors announced late Saturday that it had reached a tentative agreement with Hollywoods major studios, averting a possibl… [+1967 chars]"
    },
    {
          category:"Hollywood",
          id:11,
          title: "Don’t Look Up director Adam McKay to triple donations to Just Stop Oil",
          description: "Hollywood director of climate crisis satire praised protestors for waking up ‘sleeping governments’ and will triple donations over weekendThe Hollywood director of Netflix film Don’t Look Up has pledged to triple donations to Just Stop Oil over the weekend, t…",
          url: "https://www.theguardian.com/environment/2023/jun/02/dont-look-up-director-adam-mckay-to-triple-donations-to-just-stop-oil",
          urlToImage: "https://i.guim.co.uk/img/media/cef7fb019f5fee072b41a5c681786a13af50fd7f/0_126_2000_1200/master/2000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b01232758f3abdcd3f7a8fbffc8f8b89",
          publishedAt: "2023-06-02T22:25:37Z",
          content: "The Hollywood director of Netflix film Dont Look Up has pledged to triple donations to Just Stop Oil over the weekend, the group has said.\r\nAdam McKay, who made the satire on the climate crisis as we… [+1522 chars]"
    },
    {
          category:"Hollywood",
          id:12,
          title: "Ezra Miller makes first public appearance to promote The Flash at the film’s premiere",
          description: "Taking to the red carpet at Grauman’s Chinese Theatre in Hollywood, the actor and subject of a series of allegations thanked Warner and DC executives for their ‘discernment and care’Ezra Miller, the actor who has been the subject of a series of dismaying alle…",
          url: "https://www.theguardian.com/film/2023/jun/13/ezra-miller-makes-first-public-appearance-to-promote-the-flash-at-the-films-premiere",
          urlToImage: "https://i.guim.co.uk/img/media/1bbbdb636e4555d95fb22b865cdef8e435bba902/0_26_4742_2847/master/4742.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=2a6c131d39e1298534c4ab9c3a3c09be",
          publishedAt: "2023-06-13T09:55:04Z",
          content: "Ezra Miller, the actor who has been the subject of a series of dismaying allegations over the past year, has appeared in public for the first time since then to promote new superhero movie The Flash.… [+1412 chars]"
    },
    {
          category:"Hollywood",
          id:13,
          title: "‘It wasn’t really about the money’: the shocking story of Hollywood’s con queen",
          description: "In a twist-filled new book, writer Scott C Johnson tears back the layers of deception in a story of a scammer who wreaked havoc in the film industryIn hindsight, of course it was a set-up.The messages that fell fairy dust-like into the inboxes of cinematograp…",
          url: "https://www.theguardian.com/books/2023/jun/05/con-queen-of-hollywood-book-scott-johnson",
          urlToImage: "https://i.guim.co.uk/img/media/550ac6dcdd4f3f38f67cbaca8e623c380c7b584c/0_224_6720_4032/master/6720.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b257d0da023c0f2c080a2f5d0fd30af1",
          publishedAt: "2023-06-05T18:00:02Z",
          content: "In hindsight, of course it was a set-up.\r\nThe messages that fell fairy dust-like into the inboxes of cinematographers and actors, makeup artists and security workers, came from the email addresses of… [+5972 chars]"
    },
    {
          category:"Hollywood",
          id:14,
          title: "Al Pacino, 83, and girlfriend Noor Alfallah, 29, welcome new baby",
          description: "The baby, the couple’s first together, is named Roman and is the actor’s fourth childActor Al Pacino is a father again at 83 after he and his girlfriend, Noor Alfallah, 29, greeted the arrival on Thursday of the Hollywood great’s fourth child, multiple outlet…",
          url: "https://www.theguardian.com/film/2023/jun/16/al-pacino-baby-with-girlfriend-noor-alfallah",
          urlToImage: "https://i.guim.co.uk/img/media/4e62ee88dfd3e1a78f348a5773913371c7ecd007/0_93_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=38a113cfe91951e65acf83b2b108d3e9",
          publishedAt: "2023-06-16T13:22:45Z",
          content: "Actor Al Pacino is a father again at 83 after he and his girlfriend, Noor Alfallah, 29, greeted the arrival on Thursday of the Hollywood greats fourth child, multiple outlets reported, citing represe… [+586 chars]"
    },
    {
          category:"Hollywood",
          id:15,
          title: "Fierce, sensual, cerebral: how Glenda Jackson brought class to film | Peter Bradshaw",
          description: "The British actor was the epitome of countercultural chic in key 1970s films. It is just a shame she couldn’t be persuaded to return when her political career ended<ul><li>Glenda Jackson, fearless actor and politician, dies aged 87</li></ul>For a brief, inten…",
          url: "https://www.theguardian.com/film/2023/jun/15/fierce-sensual-cerebral-how-glenda-jackson-brought-class-to-cinema",
          urlToImage: "https://i.guim.co.uk/img/media/3b5de7bdecd83ebf413f31a0d94e5ae3ccf7d2a6/0_260_2402_1441/master/2402.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=d350dbc3e5dbb57a42f6b32464aa59db",
          publishedAt: "2023-06-15T14:03:49Z",
          content: "For a brief, intense period in the 70s, Glenda Jackson was the very epitome of bohemian Brit chic in the movies: gamine in a worldly English way, intellectual, liberated and frank but with a capacity… [+4852 chars]"
    },
    {
          category:"Hollywood",
          id:16,
          title: "Cleopatra at 60: the expensive epic that almost tanked a studio",
          description: "The notoriously overpriced biopic, starring Elizabeth Taylor and Richard Burton, carried an infamous legacy but is it any good?As I prepared to write on the 60th anniversary of Cleopatra, I asked a few friends and relatives if they had ever seen it. Some had,…",
          url: "https://www.theguardian.com/film/2023/jun/12/cleopatra-60th-anniversary-elizabeth-taylor-richard-burton",
          urlToImage: "https://i.guim.co.uk/img/media/029ea7c2590d58185772ed1edc1a9262b1e048d8/0_158_1864_1118/master/1864.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b6d5ecee4aa759a5488f2a46833c3606",
          publishedAt: "2023-06-12T15:11:23Z",
          content: "As I prepared to write on the 60th anniversary of Cleopatra, I asked a few friends and relatives if they had ever seen it. Some had, but more hadnt: life, even or perhaps especially for the well-vers… [+6548 chars]"
    },
    {
          category:"Hollywood",
          id:17,
          title: "Sarah Jessica Parker to make West End debut with husband Matthew Broderick",
          description: "The pair will star in a revival of Neil Simon’s marriage comedy Plaza Suite, which transfers from a hugely successful Broadway runSarah Jessica Parker is to make her West End stage debut opposite her husband, Matthew Broderick, in a comedy about marriage by N…",
          url: "https://www.theguardian.com/stage/2023/jun/08/sarah-jessica-parker-to-make-west-end-debut-with-husband-matthew-broderick",
          urlToImage: "https://i.guim.co.uk/img/media/4960ddecb227ee4153758e365251fe7cfb3e93e3/0_153_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=508f94f67bc82231c383387be0a0c77f",
          publishedAt: "2023-06-08T13:53:15Z",
          content: "Sarah Jessica Parker is to make her West End stage debut opposite her husband, Matthew Broderick, in a comedy about marriage by Neil Simon.\r\nPlaza Suite will open in London in January. It is the West… [+1331 chars]"
    },
    {
          category:"Hollywood",
          id:18,
          title: "Post your questions for Belle & Sebastian",
          description: "As they tour the UK and release a new single with actor Suki Waterhouse, frontman Stuart Murdoch will take on your questionsThe very byword for British indiepop, Belle and Sebastian remain at the top of their game after nearly 30 years of charming songwriting…",
          url: "https://www.theguardian.com/music/2023/jun/19/post-your-questions-for-belle-sebastian",
          urlToImage: "https://i.guim.co.uk/img/media/35c8eab023055bbabc119560f1e2927ea04b7ae8/0_94_4928_2956/master/4928.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0bd3c23d3ed3e5ff255220c51eb3aa75",
          publishedAt: "2023-06-19T11:01:03Z",
          content: "The very byword for British indiepop, Belle and Sebastian remain at the top of their game after nearly 30 years of charming songwriting. As they head out on a UK and Ireland tour from 2 July, frontma… [+1666 chars]"
    },
    {
          category:"Hollywood",
          id:19,
          title: "Mary-Louise Parker on fame, botox and rumors of a Weeds reboot",
          description: "The actor talks about ‘not running for office in Hollywood’ and the importance of expressing herself with her foreheadIt’s a warm, bright-skied morning in Brooklyn, the last full day of the school year, and Mary-Louise Parker is … Zooming in from Romania, whe…",
          url: "https://www.theguardian.com/culture/2023/jun/14/mary-louise-parker-fame-botox-weeds-reboot",
          urlToImage: "https://i.guim.co.uk/img/media/a90643b1a3c6ee324366259d3588c5baedaa58f8/0_402_3251_1951/master/3251.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=fcb86e5ff609bd1ba7bf958e51745485",
          publishedAt: "2023-06-14T15:30:07Z",
          content: "Its a warm, bright-skied morning in Brooklyn, the last full day of the school year, and Mary-Louise Parker is Zooming in from Romania, where she will be spending the next five weeks in a constricting… [+7117 chars]"
    },
    {
          category:"Hollywood",
          id:20,
          title: "Tales of yore will tell of the plot twists in this Mbappé to Real Madrid saga",
          description: "The superstar’s latest move in this never-ending story may be meaningless but his transfer will provide a real test of his talentAccording to the established scriptwriting lore there are only seven types of story. Three of those are: the quest, the tragedy, t…",
          url: "https://www.theguardian.com/football/2023/jun/13/tales-of-yore-will-tell-of-the-plot-twists-in-this-mbappe-to-real-madrid-saga",
          urlToImage: "https://i.guim.co.uk/img/media/aa5243f0219358f961d9dc440e1d8f46c4b046d0/0_93_2800_1680/master/2800.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b73eba2fc5ae35d2f1c7ae65a8a116d0",
          publishedAt: "2023-06-13T20:00:08Z",
          content: "According to the established scriptwriting lore there are only seven types of story. Three of those are: the quest, the tragedy, the voyage and return. These are the archetypes that have sustained th… [+12096 chars]"
    },
    {
          category:"Hollywood",
          id:21,
          title: "Whiskey-a-no-no: dog toy cannot mimic Jack Daniel’s, US supreme court rules",
          description: "Justices unanimously reject lower court ruling that defined Bad Spaniel chew toy as ‘expressive work’ exempt from trademark lawThe US supreme court on Thursday gave a boost to Jack Daniel’s in its trademark dispute with a dog accessory company that sold a par…",
          url: "https://www.theguardian.com/law/2023/jun/08/jack-daniels-dog-toy-supreme-court-us",
          urlToImage: "https://i.guim.co.uk/img/media/5a36452c905a7cd470c318a696df456ddf538479/0_297_3971_2384/master/3971.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=eafe44b14ed16fce27a11f17c508caff",
          publishedAt: "2023-06-08T17:56:19Z",
          content: "The US supreme court on Thursday gave a boost to Jack Daniels in its trademark dispute with a dog accessory company that sold a parody chew toy resembling the distillers widely recognized black-label… [+2198 chars]"
    },
    {
          category:"Hollywood",
          id:22,
          title: "TV tonight: controversial music-biz drama from the makers of Euphoria",
          description: "A self-help guru played by the Weeknd attempts to create the ‘sexiest pop star in America’ in The Idol. Plus: Steeltown Murders concludes. Here’s what to watch this evening Continue reading...",
          url: "https://www.theguardian.com/tv-and-radio/2023/jun/05/tv-tonight-the-idol-steeltown-murders",
          urlToImage: "https://i.guim.co.uk/img/media/45b94e8dde310775e4576bacde012cd36ff44377/410_0_10558_6342/master/10558.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ffc3b5e2d39d5eb73440126d9320664c",
          publishedAt: "2023-06-05T05:20:19Z",
          content: "The Idol\r\n9pm, Sky Atlantic\r\nProudly declaring itself the sleaziest love story in Hollywood, this full-throttle drama from the creator of Euphoria, Sam Levinson, caused quite a furore at its debut sc… [+2311 chars]"
    },
    {
          category:"Hollywood",
          id:23,
          title: "Werther review – Kaufmann heads strong cast in stylishly sung and fabulously played revival",
          description: "Royal Opera House, LondonThis revival of Benoît Jacquot’s 2004 staging of Massenet’s tragedy sees Antonio Pappano and his orchestra on top form. Kaufmann was not at full strength but Aigul Akhmetshina’s Charlotte shoneFew musical directors would choose to con…",
          url: "https://www.theguardian.com/culture/2023/jun/21/werther-review-royal-opera-house-benoit-jacquot-pappano-massenet-kaufmann",
          urlToImage: "https://i.guim.co.uk/img/media/ff764a153811bc225e2eefa18e2775b64805dbdf/0_113_2395_1438/master/2395.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctcmV2aWV3LTMucG5n&enable=upscale&s=133e4c2213e6d57995e04a00641ba3f1",
          publishedAt: "2023-06-21T13:54:38Z",
          content: "Few musical directors would choose to conduct three such different operas as Verdis Il trovatore, Bergs Wozzeck and now Massenets Werther side by side in the space of a month, but thats how Antonio P… [+2321 chars]"
    },
    {
         category:"Hollywood",
         id:24,
          title: "Hearts are back in fashion – and there’s so much to love",
          description: "From bags to bras to pendants, the evergreen symbol of affection has been everywhere on the catwalksFashion has fallen in love with the heart again this summer. The 2023 catwalks featured love hearts in every possible form: on dresses at Victoria Beckham and …",
          url: "https://www.theguardian.com/fashion/2023/jun/04/hearts-are-back-in-fashion-and-theres-so-much-to-love",
          urlToImage: "https://i.guim.co.uk/img/media/fba359651d3533f80fe7ddc64d5a3ddf5760cd27/0_0_7578_4549/master/7578.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=abd3f5519a3087b05d409c1aa2bc9ea5",
          publishedAt: "2023-06-04T10:00:09Z",
          content: "Fashion has fallen in love with the heart again this summer. The 2023 catwalks featured love hearts in every possible form: on dresses at Victoria Beckham and Rixo, on jacket lapels and hats at Mosch… [+2856 chars]"
    },
    {
          category:"Hollywood",
          id:25,
          title: "British Vogue editor-in-chief Edward Enninful promoted to new role",
          description: "After six years at the helm, Enninful is poised to take on new global role at Condé Nast next yearIt’s one of the most coveted jobs in fashion. But, six years after being named editor-in-chief of British Vogue, Edward Enninful is stepping down from the positi…",
          url: "https://www.theguardian.com/fashion/2023/jun/02/british-vogue-editor-in-chief-edward-enninful-promoted-to-new-role",
          urlToImage: "https://i.guim.co.uk/img/media/a684101a4a9a5a6038aedd341c7c1d406222a183/618_0_4425_2655/master/4425.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=58bbb3392c2698b2f5c169d396288d80",
          publishedAt: "2023-06-02T16:14:10Z",
          content: "Its one of the most coveted jobs in fashion. But, six years after being named editor-in-chief of British Vogue, Edward Enninful is stepping down from the position. Or, rather, stepping up to take a n… [+3208 chars]"
    },
    {
          category:"Hollywood",
          id:26,
          title: "Zelenskiy admits Ukrainian counter-offensive going ‘slower than desired’",
          description: "Intensity of assaults on Russian forces appears to have abated as Putin says nuclear-capable ICBMs will be entering service<ul><li>Ukraine-Russia war: latest updates</li></ul>Volodymyr Zelenskiy has conceded that Ukraine’s counter-offensive may be going “slow…",
          url: "https://www.theguardian.com/world/2023/jun/21/volodymyr-zelenskiy-admits-ukrainian-counter-offensive-going-slower-than-desired",
          urlToImage: "https://i.guim.co.uk/img/media/9fb09a2e1e10c8f5b9e083b54afc7dc3ae6f9aac/0_483_8640_5184/master/8640.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=73114298d9096cdb6d542d615d90e870",
          publishedAt: "2023-06-21T17:07:34Z",
          content: "Volodymyr Zelenskiy has conceded that Ukraines counter-offensive may be going slower than desired but has insisted that he will not needlessly risk soldiers lives to meet international expectations.\r… [+3585 chars]"
    },
    {
      category:"Hollywood",
      id:27,
      title: "Jesus Revolution review – Christian hippy drama is happy clappy propaganda",
      description: "Jon Erwin and Brent McCorkle’s retelling of the beginnings of the evangelical movement in the US is a sexless, inaccurate depictionThis corny but slickly made southern California-set drama looks plausibly like a million other period-set Bildungsromans made by…",
      url: "https://www.theguardian.com/film/2023/jun/19/jesus-revolution-review-christian-hippy-drama-is-happy-clappy-propaganda",
      urlToImage: "https://i.guim.co.uk/img/media/5dd5c79a2d6d22f2a49bf17bd0ad1de6a58b3b1a/0_240_3600_2160/master/3600.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctcmV2aWV3LTIucG5n&enable=upscale&s=449a35ccc8ebc79b6e4dfbc23d3c0e93",
      publishedAt: "2023-06-19T06:00:04Z",
      content: "This corny but slickly made southern California-set drama looks plausibly like a million other period-set Bildungsromans made by the Hollywood entertainment sausage factory. Its a story of a confused… [+2940 chars]"
    },
    {
          category:"Hollywood",
          id:28,
          title: "Sergio Busquets: ‘You have to control everything – it’s like chess … I calculate it all’",
          description: "After trophy-laden Camp Nou stay the midfielder discusses what next, his favourite season and splits in Spain’s victorious 2012 squadThere was something heist movie about it, the story taking shape one man at a time, like the opening scenes from a film. First…",
          url: "https://www.theguardian.com/football/2023/jun/05/sergio-busquets-barcelona-chess-what-next-spain",
          urlToImage: "https://i.guim.co.uk/img/media/94bb6cdc6988ffb183f663a11b40b06972eeb234/0_499_8246_4947/master/8246.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=53de14515e3d9a1336b7ecc0134fd19b",
          publishedAt: "2023-06-05T12:28:40Z",
          content: "There was something heist movie about it, the story taking shape one man at a time, like the opening scenes from a film. First Andrés Iniesta announced he was leaving Japan. Then Sergio Busquets bade… [+17803 chars]"
    },
    {
          category:"Hollywood",
          id:29,
          title: "White Men Can’t Jump: skip the 2023 remake and enjoy the 90s original instead",
          description: "Those wanting gritty realism, look elsewhere – this cartoonish, charming film wants you to believe Wesley Snipes is an unstoppable force on the meanest courts in the US<ul><li>White Men Can’t Jump is streaming on Disney+. For more recommendations of what to s…",
          url: "https://www.theguardian.com/film/2023/jun/07/white-men-cant-jump-skip-the-2023-remake-and-enjoy-the-90s-original-instead",
          urlToImage: "https://i.guim.co.uk/img/media/0eb3b92b39e10369e103b1b67149de2c52ce9ade/0_367_2014_1207/master/2014.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=55bc7c718ee31cb6bfbf3879edfb1158",
          publishedAt: "2023-06-06T15:00:14Z",
          content: "White Men Cant Jump is a film that couldnt have appeared at any other time in history than 1992. Those attached to the 2023 remake may disagree but Hollywood is now dredging the 1990s intellectual pr… [+9232 chars]"
    },
    {
          category:"Hollywood",
          id:30,
          title: "Elizabeth Taylor’s 20 best performances – ranked!",
          description: "As Cleopatra turns 60, and its star’s romance with Richard Burton becomes the subject of a new play at the National, we take a trip down the Queen of the Nile’s finest filmsLiz tries to rescue her failing marriage by getting cosmetic surgery at a Swiss clinic…",
          url: "https://www.theguardian.com/film/2023/jun/01/elizabeth-taylors-20-best-performances-ranked",
          urlToImage: "https://i.guim.co.uk/img/media/3401d0a486e80cc0e5a73673cc1f3dab8e0aa531/0_1568_4800_2879/master/4800.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=12528be36fe0886d1a446aecae2003f1",
          publishedAt: "2023-06-01T11:00:30Z",
          content: "20. Ash Wednesday (1973)\r\nLiz tries to rescue her failing marriage by getting cosmetic surgery at a Swiss clinic before testing her restored fabulousness on Helmut Berger in a Eurotrash hotel. This f… [+8021 chars]"
    },
    {
          category:"Hollywood",
          id:31,
          title: "Bryan Cranston: ‘My dad wanted to be a star. It’s a sign of immaturity’",
          description: "His role as The Host in Wes Anderson’s Asteroid City sees the actor return to the desert. He reflects on how Covid protected his privacy, his secrets to acting success, and how his estranged father tried to cash in on Breaking Bad“The circus,” says Bryan Cran…",
          url: "https://www.theguardian.com/film/2023/jun/16/bryan-cranston-asteroid-city-interview",
          urlToImage: "https://i.guim.co.uk/img/media/53b99d97333fb8b5af013b0497b40bbf0a7223d1/0_547_6000_3602/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=346db763d229edea2bebcc4a644fe5a6",
          publishedAt: "2023-06-16T05:00:36Z",
          content: "The circus, says Bryan Cranston, gesturing to the window of his seafront Cannes hotel. He is indicating the film festival fray on the promenade below. The crowds and the cordons; the limousines and t… [+9636 chars]"
    },
    {
          category:"Hollywood",
          id:32,
          title: "Edward Enninful, the British Vogue editor who keeps pushing boundaries",
          description: "Enninful has transformed title from archaic, mostly white glossy into diverse, multi-platform brand<ul><li>British Vogue editor-in-chief Edward Enninful promoted to new role</li></ul>When Edward Enninful was appointed editor-in-chief of British Vogue in 2017,…",
          url: "https://www.theguardian.com/fashion/2023/jun/03/edward-enninful-the-british-vogue-editor-who-keeps-pushing-boundaries",
          urlToImage: "https://i.guim.co.uk/img/media/dcec3a075f3cf85b4caef4b93f5f2ed98861bcc9/1_0_2065_1240/master/2065.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0a9511357d7f6d995650859eb3a8a720",
          publishedAt: "2023-06-03T14:31:23Z",
          content: "When Edward Enninful was appointed editor-in-chief of British Vogue in 2017, he became the first man and the first black person to hold the title.\r\nThroughout his six-year tenure, the firsts have con… [+4127 chars]"
    },
    //Bollywood category
    {
      category:"Bollywood",
      id:33,
      title: "Adipurush: Indian film dialogue sparks Bollywood ban in Nepal cities",
      description: "Two Nepal cities have banned screenings of Bollywood films over a line in epic film Adipurush.",
      url: "https://www.bbc.co.uk/news/world-asia-india-65947197",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/FD72/production/_130128846_aadipurush.jpg",
      publishedAt: "2023-06-19T06:48:04Z",
      content: "Officials from two cities in Nepal have said they will not allow Bollywood films to be screened until an \"objectionable\" line is deleted from a new Indian movie.\r\nThe makers of Adipurush say the film… [+2989 chars]"
    },
    {
      category:"Bollywood",
      id:34,
      title: "‘Deeply personal and very authentic’: how podcasts took over the world in 20 years",
      description: "Since the first podcast was released two decades ago this month, the medium has upended pop culture in countless unexpected ways, from revolutionising standup comedy to providing storytelling fuel for drama and documentaryDo you remember life before podcasts?…",
      url: "https://www.theguardian.com/tv-and-radio/2023/jun/03/20-years-of-podcasting",
      urlToImage: "https://i.guim.co.uk/img/media/9e7a1e946bb90de838b6a4046371b41ccd0285e5/0_8_2205_1323/master/2205.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c626d448be6936363287571fb9f971bb",
      publishedAt: "2023-06-03T10:55:28Z",
      content: "Do you remember life before podcasts? Yes, obviously, is likely to be the short answer. Podcasting is still a relatively youthful medium, after all. In fact, it is exactly 20 years this month since t… [+16909 chars]"
    },
    {
      category:"Bollywood",
      id:35,
      title: "‘Yo nunca’, crítica: una despedida por todo lo alto a la mejor comedia adolescente de Netflix",
      description: "Devi (Maitreyi Ramakrishnan) va a Princeton. Al menos, esa es su intención. También lo es perder la virginidad. El personaje logra ambas cosas a lo largo de la cuarta y última temporada de la serie Yo Nunca de Netflix. Pero lo que parecen pasos inevitables en…",
      url: "http://hipertextual.com/2023/06/yo-nunca-critica-netflix",
      urlToImage: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/06/yo-nunca-2-scaled.jpg?fit=2560%2C1439&quality=50&strip=all&ssl=1",
      publishedAt: "2023-06-08T19:02:00Z",
      content: "Devi (Maitreyi Ramakrishnan) va a Princeton. Al menos, esa es su intención. También lo es perder la virginidad. El personaje logra ambas cosas a lo largo de la cuarta y última temporada de la serie Y… [+5530 chars]"
    },
    {
          category:"Bollywood" ,
          id:36,
          title: "Death Note musical's English-language cast revealed",
          description: "According to Comicbook.com, the English language version of the Death Note Musical has announced its cast.\n\n\n\nMusicals occupy an interesting space in pop culture. When you look at the financials for almost every popular Broadway musical, you come to find out …",
          url: "https://boingboing.net/2023/06/03/death-note-musicals-english-language-cast-revealed.html",
          urlToImage: "https://images.indianexpress.com/2023/06/bigg-boss-ott-2-contestants.jpg",
          publishedAt: "2023-06-03T13:17:49Z",
          content: "According to Comicbook.com, the English language version of the Death Note Musical has announced its cast.\r\nMusicals occupy an interesting space in pop culture. When you look at the financials for al… [+1479 chars]"
    },
    {
           category:"Bollywood",
           id:37,
          title: "Do We Need Copyright?",
          description: "The concept of property is a social construction. Animals, such as cats, can own a piece of food, or a territory, but only as long as they are able to personally maintain a credible threat of violence. And animals can only defend concrete, physical properties…",
          url: "https://lemire.me/blog/2012/03/22/do-we-need-copyright/",
          urlToImage: "https://lemire.me/img/portrait2018facebook.jpg",
          publishedAt: "2023-06-04T22:28:38Z",
          content: "The concept of property is a social construction. Animals, such as cats, can own a piece of food, or a territory, but only as long as they are able to personally maintain a credible threat of violenc… [+7541 chars]"
    },
    {
           category:"Bollywood",
           id:38,
          title: "Why Nobody Will Do Anything Until It's Too Late",
          description: "I like a rousing story as much as anyone else, but systems aren't stories, and confusing the two won't actually fix what's not sustainable ...",
          url: "http://charleshughsmith.blogspot.com/2023/06/this-is-why-nobody-will-do-anything.html",
          urlToImage: "https://images.indianexpress.com/2023/06/naa-ready-1200.jpg",
          publishedAt: "2023-06-14T20:25:36Z",
          content: "I like a rousing story as much as anyone else, but systems aren't stories, and confusing the two won't actually fix what's not sustainable in the current system's configuration.\r\nOK, I get it: we all… [+13274 chars]"
    },
    {
          category:"Bollywood",
          id:30,
          title: "Ignore any lofty claims about the Bollywood hit The Kerala Story: this film will only incite hatred against Muslims | Asim Ali",
          description: "The controversial film championed by the BJP is an Islamophobic fantasyTwo weeks after I was born in the curfewed town of Aligarh, in Uttar Pradesh, the Aligarh riots of 1990 broke out. What began as skirmishes exploded into widespread bloodletting after thre…",
          url: "https://www.theguardian.com/commentisfree/2023/jun/01/bollywood-hit-kerala-story-islamophobic-bjp",
          urlToImage: "https://i.guim.co.uk/img/media/96410f45f554697fd8777fcb870157a462beb321/0_282_4236_2542/master/4236.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=594317a3a4f51c29fdc403fd87c13185",
          publishedAt: "2023-06-01T08:59:45Z",
          content: "Two weeks after I was born in the curfewed town of Aligarh, in Uttar Pradesh, the Aligarh riots of 1990 broke out. What began as skirmishes exploded into widespread bloodletting after three leading H… [+5225 chars]"
    },
    {
          category:"Bollywood",
          id:40,
          title: "46 Books that Changed the World",
          description: "Here, in no particular order, are just a few of history’s most influential tomes—and how they made humanity look at things in a new light.",
          url: "https://www.mentalfloss.com/posts/books-that-changed-the-world",
          urlToImage: "https://images2.minutemediacdn.com/image/upload/c_crop,w_2667,h_1500,x_0,y_0/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/mentalfloss/01h1cvt9dxhmdzzqe5mm.jpg",
          publishedAt: "2023-06-06T16:00:00Z",
          content: "Anyone whos ever turned a page understands the potential for books to change the world in ways both large and small. Here, in no particular order, are just a few of historys most influential tomesand… [+64698 chars]"
    },
    {
          category:"Bollywood",
          id:41,
          title: "Abu Dhabi To Host Middle East Premiere Of ‘Mission: Impossible – Dead Reckoning Part One’ With Tom Cruise & Christopher McQuarrie In Attendance",
          description: "Abu Dhabi will host the Middle East premiere of Paramount/Skydance’s Mission: Impossible – Dead Reckoning Part One on June 26, with star Tom Cruise and director Christopher McQuarrie walking the red carpet. Securing the prestigious event marks a coup for the …",
          url: "https://deadline.com/2023/06/abu-dhabi-to-host-middle-east-premiere-of-mission-impossible-dead-reckoning-part-one-with-tom-cruise-christopher-mcquarrie-in-attendance-1235409401/",
          urlToImage: "https://c.files.bbci.co.uk/137AF/production/_128419797_pathan2.jpg",
          publishedAt: "2023-06-06T11:09:25Z",
          content: "Abu Dhabi will host the Middle East premiere of Paramount/Skydance’s Mission: Impossible – Dead Reckoning Part One on June 26, with star Tom Cruise and director Christopher McQuarrie walking the red … [+2991 chars]"
    },
    {
          category:"Bollywood",
          id:42,
          title: "‘Ghosts’ Star Utkarsh Ambudkar On His Path From Rapper To A TV Series Lead & And The Big Opportunity That Got Away",
          description: "Even if you haven’t watched CBS’ hit comedy Ghosts, chances are pretty good that you’d recognize Utkarsh Ambudkar — the actor-rapper best known for his breakout role as one of the Treblemakers in Pitch Perfect and as Mindy Kaling’s younger brother in The Mind…",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD05qu75f4X-6JOSsqgpGdTZcrXP29CJ58Rw&usqp=CAU",
          urlToImage:"https://tanqeed.com/wp-content/uploads/2017/10/kuch-to-hai-song-from-do-lafzon.jpg",
          publishedAt: "2023-06-04T19:02:00Z",
          content: "Even if you haven’t watched CBS’ hit comedy Ghosts, chances are pretty good that you’d recognize Utkarsh Ambudkar — the actor-rapper best known for his breakout role as one of the Treblemakers in Pit… [+7333 chars]"
    },
    {
          category:"Bollywood",
          id:43,
          title: "After Priyanka Chopra, Taapsee Pannu says camps exist in Bollywood: ‘Rule of the game is that it’s going to be unfair’",
          description: "Taapsee Pannu has opened up about the existence of camps in Bollywood, and the struggles of an outsider.",
          url: "https://indianexpress.com/article/entertainment/bollywood/dunki-actor-taapsee-pannu-says-camps-exist-in-bollywood-rule-of-the-game-is-that-its-going-to-be-unfair-8665878/",
          urlToImage: "https://images.indianexpress.com/2023/06/Taapsee-Pannu.jpg",
          publishedAt: "2023-06-16T04:25:37Z",
          content: "Actor Taapsee Pannu will next be seen in Rajkumar Hirani’s Dunki, with Shah Rukh Khan. As she completes a decade in the film industry, the actor recently opened up about the existence of ‘camps’ in B… [+2139 chars]"
    },
    {
          category:"Bollywood",
          id:44,
          title: "T-series apologises to Kathmandu Mayor, wants Adipurush ban reversed",
          description: "The Bollywood film's producer apologised to Kathmandu Mayor Balen Shah over a dialogue where Sita is described as the ‘daughter of India’where Sita is described as the ‘daughter of India’where Sita is described as the ‘daughter of India’.",
          url: "https://indianexpress.com/article/entertainment/bollywood/t-series-aadipurush-kathmandu-ban-8672980/",
          urlToImage: "https://images.indianexpress.com/2023/06/adipurush-controversy.jpg",
          publishedAt: "2023-06-19T14:02:55Z",
          content: "Requesting for the ban on Adipurush to be lifted, the Bollywood film’s producer apologised to Kathmandu Mayor Balen Shah over a dialogue where Sita is described as the daughter of India.\r\nIn a letter… [+1522 chars]"
    },
    {
          category:"Bollywood",
          Id:45,
          title: "‘This is weirdly disturbing’: AI art shows Bollywood actors in their childhood avatars",
          description: "In May, an AI enthusiast named Sahid (@sahixd) created a series of AI images imagining various Indian actors as elderly men.",
          url: "https://indianexpress.com/article/trending/trending-in-india/ai-art-shows-bollywood-actors-childhood-avatars-8672803/",
          urlToImage: "https://images.indianexpress.com/2023/06/AI-art-shows-various-Bollywood-actors-in-their-childhood-avatars.jpg",
          publishedAt: "2023-06-19T12:11:30Z",
          content: "Artificial Intelligence has been pushing boundaries. Artwork made using software has transformed how the world views images as AI has the ability to demonstrate any implausible scenario. From Bollywo… [+1195 chars]"
    },
    {
           category:"Bollywood",
           id:46,
          title: "Poorna Jagannathan says Ayan Mukerji was writing scenes on location while shooting Yeh Jawaani Hai Deewani: ‘It was so typically Bollywood’",
          description: "Poorna Jagannathan recalled an anecdote from Yeh Jawaani Hai Deewani's set where the scene was being written as it was being shot.",
          url: "https://indianexpress.com/article/entertainment/bollywood/yeh-kjawaani-hai-deewani-poorna-jagannathan-ayan-mukerji-writing-scenes-on-location-8648429/",
          urlToImage: "https://images.indianexpress.com/2023/06/ranbir-yjhd.jpg",
          publishedAt: "2023-06-06T09:32:23Z",
          content: "Ayan Mukerji’s Yeh Jawaani Hai Deewani recently celebrated its 10 year anniversary. Starring Deepika Padukone and Ranbir Kapoor, the film turned out to be one of the biggest hits of 2013. Recently, a… [+1621 chars]"
    },
    {
      category:"Bollywood",
      id:47,
      title: "‘Life is all about celebration’: After nearly 70 years, 1954 Class 10 batchmates get together, dance to Bollywood hits",
      description: "The now-viral video was shared on Twitter by Mumbai News, a popular account that caters to Mumbai-centric news.",
      url: "https://indianexpress.com/article/trending/trending-globally/after-70-years-1954-class-10-batchmates-get-together-8660967/",
      urlToImage: "https://images.indianexpress.com/2023/06/old-people-dancing.jpeg",
      publishedAt: "2023-06-13T12:15:14Z",
      content: "Any video that shows the elderly rejoicing in public is bound to evoke joy. Now a video that shows a group of elderly people dancing to yesteryear Bollywood hits is going viral for the exact same rea… [+1122 chars]"
    },
    {
          category:"Bollywood",
          id:48,
          title: "Naseeruddin Shah mocks ‘immature’ Bollywood stars for having entourages: ‘They like to make a statement, like a shahenshah’",
          description: "Naseeruddin Shah joined his wife Ratna Pathak Shah in mocking movie stars who can't function without an entourage.",
          url: "https://indianexpress.com/article/entertainment/bollywood/naseeruddin-shah-immature-bollywood-star-entourage-8639891/",
          urlToImage: "https://images.indianexpress.com/2019/12/Naseer-1200.jpg",
          publishedAt: "2023-06-01T04:58:48Z",
          content: "Actor Naseeruddin Shah mirrored his wife, actor Ratna Pathak Shah’s recent comments about stars and their entourages. He said that he finds behaviour like this ‘immature’. In an interview, the vetera… [+1874 chars]"
    },
    {
      category:"Bollywood",
      id:49,
      title: "Raata Lambiyan singer Asees Kaur marries Goldie Sohel, see photos",
      description: "Asees Kaur married Goldie Sohel on Saturday and shared pictures from the Anand Karaj ceremony on their respective Instagram handles.",
      url: "https://indianexpress.com/article/entertainment/music/raata-lambiyan-singer-asees-kaur-marries-goldie-sohel-see-wedding-photos-8671209/",
      urlToImage: "https://images.indianexpress.com/2023/06/‘Raata-Lambiyan-singer-Asees-Kaur-1200.jpg",
      publishedAt: "2023-06-18T12:20:52Z",
      content: "Singer Asees Kaur and music composer Goldie Sohel have tied the knot in an intimate ceremony attended by family and close friends.\r\nThe duo got married on Saturday and shared pictures from the Anand … [+573 chars]"
    },
    {
           category:"Bollywood",
           id:50,
          title: "Rocky Aur Rani Kii Prem Kahaani teaser: Alia Bhatt and Ranveer Singh’s big Bollywood musical is trademark Karan Johar, gets SRK’s endorsement",
          description: "Karan Johar pays homage to the late Yash Chopra in his upcoming film Rocky Aur Rani Kii Prem Kahaani, starring Alia Bhatt and Ranveer Singh. Watch the film's first teaser here.",
          url: "https://indianexpress.com/article/entertainment/bollywood/rocky-aur-rani-kii-prem-kahaani-teaser-trailer-alia-bhatt-ranveer-singh-karan-johar-musical-shah-rukh-khan-8674244/",
          urlToImage: "https://wallpaperaccess.com/full/9335221.jpg",
          publishedAt: "2023-06-20T06:43:49Z",
          content: "Karan Johar has chosen a telling time to debut the first teaser for his upcoming film Rocky Aur Rani Kii Prem Kahaani — a new romantic drama starring Alia Bhatt and Ranveer Singh. Scrutiny has probab… [+2403 chars]"
    },
    {
      category:"Bollywood",
      id:51,
      title: "Groom-to-be Karan Deol poses with his ‘best men’, dad Sunny Deol and brother Rajveer Deol; Bobby Deol showers love",
      description: "Sunny Deol and Pooja Deol's son Karan Deol is set to marry Drisha Acharya, the great-granddaughter of veteran filmmaker Bimal Roy.",
      url: "https://indianexpress.com/article/entertainment/bollywood/groom-to-be-karan-deol-poses-with-his-best-men-dad-sunny-deol-brother-rajveer-deol-uncle-bobby-deol-showers-love-8663677/",
      urlToImage: "https://images.indianexpress.com/2023/06/Karan-Deol-poses-with-his-best-men-dad-Sunny-Deol-and-brother-Rajveer-Deol-1200.jpg",
      publishedAt: "2023-06-15T05:39:34Z",
      content: "Sunny Deol’s son Karan Deol recently had his roka ceremony with Drisha Acharya. Karan, the grandson of veteran actor Dharmendra, is set to marry Drisha, the great-granddaughter of veteran filmmaker B… [+1177 chars]"
    },

    //Technology category
    {
        category:"Technology",
        id:52,
        title: "This iPad Stylus Is Almost 60% Off Right Now",
        description: "Apple Pencils have a notoriously steep price tag. Instead of paying over $100, you might want to check out the Digi Pen stylus designed for iPads and other tablets. For a limited time, you can get one for just $39.99, down from its normal price of $99.95.Read…",
        url: "https://lifehacker.com/this-ipad-stylus-is-almost-60-off-right-now-1850541261",
        urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/368e6ab3b30c5b914434afdbe72268b6.jpg",
        publishedAt: "2023-06-21T14:30:00Z",
        content: "Apple Pencils have a notoriously steep price tag. Instead of paying over $100, you might want to check out the Digi Pen stylus designed for iPads and other tablets. For a limited time, you can get on… [+1130 chars]"
    },
    {
        category:"Technology",
        id:53,
        title: "What People Are Getting Wrong This Week: UFOs and the Government",
        description: "This week, a lot of people are wrong about aliens and UFOs.This week, a lot of people are wrong about aliens and UFOs.This week, a lot of people are wrong about aliens and UFOs.This week, a lot of people are wrong about aliens and UFOs.Read more...",
        url: "https://lifehacker.com/what-people-are-getting-wrong-this-week-ufos-and-the-g-1850541750",
        urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/de2c3e7f87a1a3d12596cb993aa4fb25.png",
        publishedAt: "2023-06-15T14:00:00Z",
        content: "This week, a lot of people are wrong about aliens and UFOs.\r\nOn June 5, The Debrief revealed that U.S. intelligence agent/whistleblower David Charles Grusch had provided evidence to Congress and the … [+4925 chars]"
    },
    {
         category:"Technology",
         id:54,
        title: "Use the 16 'Career Clusters' to Help Find the Right Job for You",
        description: "The Career Technical Education (CTE) program is aimed at providing students with technical skills and training so they can succeed in their career of choice—but the CTE can also help you figure out which industry you’re suited for in the first place. Consider…",
        url: "https://lifehacker.com/use-the-16-career-clusters-to-help-find-the-right-job-f-1850560980",
        urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/f63800a72ab5ef454f64945fa080bf7f.jpg",
        publishedAt: "2023-06-21T18:30:00Z",
        content: "The Career Technical Education (CTE) program is aimed at providing students with technical skills and training so they can succeed in their career of choicebut the CTE can also help you figure out wh… [+5823 chars]"
    },
    {
         category:"Technology",
         id:55,
        title: "Chinese startup says its new EV battery doesn’t lose range in the cold",
        description: "The Chinese startup Greater Bay Technology claims its latest EV battery can charge at normal speeds even in cold temperatures. Huang Xiangdong, co-founder and chairman, says the company’s new Phoenix cell uses superconducting materials and thermal management …",
        url: "https://www.engadget.com/chinese-startup-says-its-new-ev-battery-doesnt-lose-range-in-the-cold-164149959.html",
        urlToImage: "https://s.yimg.com/uu/api/res/1.2/pWUxYUOJTAjAfPPoLe_Y1A--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-06/e9043580-0486-11ee-b43f-b7ee5325bc7f.cf.jpg",
        publishedAt: "2023-06-06T16:41:49Z",
        content: "The Chinese startup Greater Bay Technology claims its latest EV battery can charge at normal speeds even in cold temperatures. Huang Xiangdong, co-founder and chairman, says the companys new Phoenix … [+1490 chars]"
    },
    {
        category:"Technology",
        id:56,
        title: "President Biden meets with AI tech leaders in San Francisco",
        description: "While lawmakers in Congress (and soon, the Senate) call for a \"blue-ribbon commission\" to study the potential impacts of AI on American society, President Biden on Tuesday met with leaders in the emerging field to discuss and debate the issue directly. The Pr…",
        url: "https://www.engadget.com/president-biden-meets-with-ai-tech-leaders-in-san-francisco-182140363.html",
        urlToImage: "https://s.yimg.com/uu/api/res/1.2/4VcXIVrbXF1Ra.AU5sZaZQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-06/4ff6f600-0f96-11ee-b82f-5eed9cbd50c7.cf.jpg",
        publishedAt: "2023-06-20T18:21:40Z",
        content: "While lawmakers in Congress (and soon, the Senate) call for a \"blue-ribbon commission\" to study the potential impacts of AI on American society, President Biden on Tuesday met with leaders in the eme… [+1355 chars]"
    },
    {
         category:"Technology",
         id:57,
        title: "Toyota claims its future EVs will have a range over 600 miles",
        description: "The distance EVs can go on a single charge has steadily increased over the years, with top options from the likes of Mercedes, BMW and Tesla all touting an estimated range of over 350 miles. Now, Toyota, a long-time hybrid maker (who can forget when having a …",
        url: "https://www.engadget.com/toyota-claims-its-future-evs-will-have-a-range-over-600-miles-104555944.html",
        urlToImage: "https://s.yimg.com/uu/api/res/1.2/i2Xwz_YlmepWsfPnXsCf4A--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2021-05/2730d3d0-b96c-11eb-bbfa-a34e75c7cdc3.cf.jpg",
        publishedAt: "2023-06-13T10:45:55Z",
        content: "The distance EVs can go on a single charge has steadily increased over the years, with top options from the likes of Mercedes, BMW and Tesla all touting an estimated range of over 350 miles. Now, Toy… [+2117 chars]"
    },
    {
         category:"Technology",
         id:58,
        title: "NVIDIA's Neuralangelo is an AI model that can generate 3D objects from 2D videos",
        description: "NVIDIA has introduced a new AI model called Neuralangelo that can create 3D replicas of objects from 2D videos, whether they're classic sculptures or run-of-the-mill trucks and buildings. Neuralangelo works by selecting several frames showing the subject from…",
        url: "https://www.engadget.com/nvidias-neuralangelo-is-an-ai-model-that-can-generate-3d-objects-from-2d-videos-130023299.html",
        urlToImage: "https://s.yimg.com/uu/api/res/1.2/6NnWMtPt9OjGi6OJJFjihg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/0df7c250-ff9e-11ed-b7fe-92d371cb755a.cf.jpg",
        publishedAt: "2023-06-01T13:00:23Z",
        content: "NVIDIA has introduced a new AI model called Neuralangelo that can create 3D replicas of objects from 2D videos, whether they're classic sculptures or run-of-the-mill trucks and buildings. Neuralangel… [+1749 chars]"
    },
    {
        category:"Technology",
         id:59,
        title: "Former Samsung executive accused of trying to copy an entire chip plant in China",
        description: "South Korean President Yoon Suk Yeol recently declared the chip manufacturing industry to be in an \"all-out war,\" and the latest developments certainly support that statement. Prosecutors in the Suwon District have indicted a former Samsung executive for alle…",
        url: "https://www.engadget.com/former-samsung-executive-accused-of-trying-to-copy-an-entire-chip-plant-in-china-121008690.html",
        urlToImage: "https://s.yimg.com/uu/api/res/1.2/EEjggJWC7TpHPDkhbSHZVw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/488dcbb0-e4b1-11ed-bc79-01912db72703.cf.jpg",
        publishedAt: "2023-06-12T12:10:08Z",
        content: "South Korean President Yoon Suk Yeol recently declared the chip manufacturing industry to be in an \"all-out war,\" and the latest developments certainly support that statement. Prosecutors in the Suwo… [+1735 chars]"
    },
    {
          category:"Technology",
          id:60,
        title: "Apple's AirTag 4-pack is just $80 right now",
        description: "If you've been debating whether to pick up some Apple AirTags, now might be the time finally to go for it. The AirTag 4-pack currently has a 20 percent discount, dropping from $100 to $80. Not only does this bring the pack close to its all-time-lowest price, …",
        url: "https://www.engadget.com/apples-airtag-4-pack-is-just-80-right-now-095027025.html",
        urlToImage: "https://s.yimg.com/uu/api/res/1.2/6fZVnfehMHJJBVQgpJzHsA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2021-04/563d46f0-a336-11eb-badb-362b28ea55b4.cf.jpg",
        publishedAt: "2023-06-02T09:50:27Z",
        content: "If you've been debating whether to pick up some Apple AirTags, now might be the time finally to go for it. The AirTag 4-pack currently has a 20 percent discount, dropping from $100 to $80. Not only d… [+1099 chars]"
    },
    {
         category:"Technology",
         id:62,
        title: "Cadillac teases the electric Escalade IQ ahead of an August 9th reveal",
        description: "Here is your first peek at Cadillac's Escalade IQ\r\n. The brand has started to tease the upcoming EV\r\n, which it will formally unveil on August 9th. As you might expect, the first glimpse doesn't reveal much about the Escalade IQ. It appears to have LEDs in th…",
        url: "https://www.engadget.com/cadillac-teases-the-electric-escalade-iq-ahead-of-an-august-9th-reveal-140045265.html",
        urlToImage: "https://s.yimg.com/uu/api/res/1.2/IGxCIuLKKBxo9qJU101t8g--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-06/5ea2b6e0-0edc-11ee-a7bf-e1d98271313a.cf.jpg",
        publishedAt: "2023-06-20T14:00:45Z",
        content: "Here is your first peek at Cadillac's Escalade IQ\r\n. The brand has started to tease the upcoming EV\r\n, which it will formally unveil on August 9th. As you might expect, the first glimpse doesn't reve… [+774 chars]"
    },
    {
      category:"Technology",
      id:63,
      title: "Domino's can now deliver pizza almost anywhere using GPS pins",
      description: "You no longer need to be at a fixed address if you're craving pizza. Domino's is introducing a Pinpoint Delivery feature in the US that, as the name implies, will send pies to a GPS pin you drop on the map. You can get pizza at the beach, or feed the soccer t…",
      url: "https://www.engadget.com/dominos-can-now-deliver-pizza-almost-anywhere-using-gps-pins-143013196.html",
      urlToImage: "https://s.yimg.com/uu/api/res/1.2/mWFU2WklQyo0kjo4hy84mw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-06/5c5ec9d0-0f6a-11ee-bd35-00a140bdb818.cf.jpg",
      publishedAt: "2023-06-20T14:30:13Z",
      content: "You no longer need to be at a fixed address if you're craving pizza. Domino's is introducing a Pinpoint Delivery feature in the US that, as the name implies, will send pies to a GPS pin you drop on t… [+1625 chars]"
    },
    {
      category:"Technology",
      id:64,
      title: "Chrome can soon convert PDFs into text it can read aloud",
      description: "Google will soon make it easier to interact with PDFs if you have low vision. The company is adding OCR (optical character recognition) technology to Chrome that can convert PDFs to text that makes them more accessible, particularly if you want a screen reade…",
      url: "https://www.engadget.com/chrome-can-soon-convert-pdfs-into-text-it-can-read-aloud-154428591.html",
      urlToImage: "https://s.yimg.com/uu/api/res/1.2/NbBOK5fZZ7Ej.p87NBKDLQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-06/0ad40190-110c-11ee-aff9-54c269e1d285.cf.jpg",
      publishedAt: "2023-06-22T15:44:28Z",
      content: "Google will soon make it easier to interact with PDFs if you have low vision. The company is adding OCR (optical character recognition) technology to Chrome that can convert PDFs to text that makes t… [+1369 chars]"
    },
    {
        category:"Technology",
        id:65,
        title: "Paul McCartney is using AI to create a final song for The Beatles",
        description: "AI-assisted vocals aren't just for bootleg songs. Paul McCartney has revealed to BBC Radio 4 that he's using AI to turn a John Lennon demo into one last song for The Beatles. The technology helped extract Lennon's voice to get a \"pure\" version that could be m…",
        url: "https://www.engadget.com/paul-mccartney-is-using-ai-to-create-a-final-song-for-the-beatles-133839244.html",
        urlToImage: "https://s.yimg.com/uu/api/res/1.2/gUwzYelZYmI8WBicK9vPEw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-06/ca8a0df0-09e5-11ee-abfa-4850eeca1593.cf.jpg",
        publishedAt: "2023-06-13T13:38:39Z",
        content: "AI-assisted vocals aren't just for bootleg songs. Paul McCartney has revealed to BBC Radio 4 that he's using AI to turn a John Lennon demo into one last song for The Beatles. The technology helped ex… [+1431 chars]"
    },
    {
         category:"Technology",
         id:66,
        title: "Cellular satellite test successfully beams 4G data from space to a regular phone",
        description: "Earlier this year, AST SpaceMobile, with the help of AT&T, managed to connect an off-the-shelf Samsung Galaxy S22 to a satellite in low-Earth orbit to complete a two-way voice call\r\n. The announcement marked a major milestone for satellite-based cellular comm…",
        url: "https://www.engadget.com/cellular-satellite-test-successfully-beams-4g-data-from-space-to-a-regular-phone-200318927.html",
        urlToImage: "https://s.yimg.com/uu/api/res/1.2/tmMSyXBnXGx3EklnPhmjSA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-06/18bb6cc0-106d-11ee-97c7-4f89a16a8483.cf.jpg",
        publishedAt: "2023-06-21T20:03:18Z",
        content: "Earlier this year, AST SpaceMobile, with the help of AT&amp;T, managed to connect an off-the-shelf Samsung Galaxy S22 to a satellite in low-Earth orbit to complete a two-way voice call\r\n. The announc… [+1401 chars]"
    },
    {
         category:"Technology",
         id:67,
        title: "The Morning After: Popular subreddits welcomed adult content to protest Reddit changes",
        description: "The battle over Reddit’s API changes continues, even after coming into effect. Reddit's decision to charge for access to its API was supposedly aimed at companies scraping the website to train Large Language Models for generative AI, but the decision also aff…",
        url: "https://www.engadget.com/the-morning-after-popular-subreddits-welcomed-adult-content-to-protest-reddit-changes-111510310.html",
        urlToImage: "https://s.yimg.com/uu/api/res/1.2/CIbI.odAakxKIZTXyLtCpQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/3ea87580-ffe3-11ed-9dbd-f671b99c14ed.cf.jpg",
        publishedAt: "2023-06-22T11:15:10Z",
        content: "The battle over Reddits API changes continues, even after coming into effect. Reddit's decision to charge for access to its API was supposedly aimed at companies scraping the website to train Large L… [+5783 chars]"
    },
    {
         category:"Technology",
         id:68,
        title: "'Asgard's Wrath 2' is Meta's most ambitious VR game to date",
        description: "One of the biggest announcements at today's Meta Quest Gaming Showcase\r\n was Asgard’s Wrath 2, a sequel to the well-regarded original\r\n from 2019 that’s slated for release this winter. It's shaping up to be Meta's most ambitious game to date — it's an action …",
        url: "https://www.engadget.com/asgards-wrath-2-is-metas-most-ambitious-vr-game-to-date-172826048.html",
        urlToImage: "https://s.yimg.com/uu/api/res/1.2/2lo43tBWnlKcu8PeEvVlTw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-06/6eb8d1f0-0094-11ee-99ff-a138e9664b40.cf.jpg",
        publishedAt: "2023-06-01T17:28:26Z",
        content: "One of the biggest announcements at today's Meta Quest Gaming Showcase\r\n was Asgards Wrath 2, a sequel to the well-regarded original\r\n from 2019 thats slated for release this winter. It's shaping up … [+7048 chars]"
    },
    {
         category:"Technology",
         id:69,
        title: "Hitting the Books: Why AI won't be taking our cosmology jobs",
        description: "The problem with studying the universe around us is that it is simply too big. The stars overhead remain too far away to interact with directly, so we are relegated to testing our theories on the formation of the galaxies based on observable data. Simulating …",
        url: "https://www.engadget.com/hitting-the-books-universe-in-a-box-andrew-pontzen-riverhead-books-153005483.html",
        urlToImage: "https://s.yimg.com/uu/api/res/1.2/g3QMdSiWT5jO45IRVFF7AQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-10/e577ef80-12e7-11eb-afbe-70347c733aff.cf.jpg",
        publishedAt: "2023-06-18T15:30:05Z",
        content: "The problem with studying the universe around us is that it is simply too big. The stars overhead remain too far away to interact with directly, so we are relegated to testing our theories on the for… [+8360 chars]"
    },
    {
         category:"Technology",
         id:70,
        title: "How do you prevent an AI-generated game from losing the plot?",
        description: "Did you ever get to the end of Wizard of Oz and have notes – the nagging intuition that you could have taken down all those pesky flying monkeys or handled the backstabbing intricacies of Munchkin guild politics more effectively than Dorothy and her band of m…",
        url: "https://www.engadget.com/how-do-you-prevent-an-ai-generated-game-from-losing-the-plot-170002788.html",
        urlToImage: "https://s.yimg.com/uu/api/res/1.2/.hq4M8ynGA75qSMDXfMAvQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-06/85b65bf0-0f82-11ee-bb9f-a9b5afa07646.cf.jpg",
        publishedAt: "2023-06-20T17:00:02Z",
        content: "Did you ever get to the end of Wizard of Oz and have notes the nagging intuition that you could have taken down all those pesky flying monkeys or handled the backstabbing intricacies of Munchkin guil… [+13904 chars]"
    },
    {
      category:"Technology",
      id:71,
      title: "Talitrix Prison-Monitoring System Tracks Inmates Down to Their Heart Rate",
      description: "Documents WIRED obtained detail new prison-monitoring technology that keeps tabs on inmates' location, heartbeats, and more.",
      url: "https://www.wired.com/story/prison-wristband-talitrix-tracking/",
      urlToImage: "https://i.guim.co.uk/img/media/a3b52e4c48dc210444e2aaff82638a628c07f3cd/0_247_2244_1346/master/2244.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=9a5207ed3bfa20d3cb4a863b1fdcd07e",
      publishedAt: "2023-06-11T06:00:00Z",
      content: "The conditions inside the Fulton County Jail system are dire. Inmates at one of the jails in Atlanta, Georgia, are sleeping on the floor in plastic trays. Cell doors hang off hinges, footage from one… [+3215 chars]"
    },
    {
        category:"Technology",
        id:72,
        title: "Good News! China and the US Are Talking About AI Dangers",
        description: "Scientists from the world’s two superpowers are concerned about the risks of AI—which may offer a bridge to developing global regulations.",
        url: "https://www.wired.com/story/china-usa-ai-dangers/",
        urlToImage: "https://i.guim.co.uk/img/media/2dd50736ce993798753d93776bc3ec5fc92cfb8b/0_336_5076_3046/master/5076.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f8bf648dce7c84ecd0528043da80ec07",
        publishedAt: "2023-06-15T16:00:00Z",
        content: "Sam Altman, the CEO of OpenAI, recently said that China should play a key role in shaping the guardrails that are placed around the technology.\r\nChina has some of the best AI talent in the world, Alt… [+3527 chars]"
    },

    //Food category
    {
         category:"Food",
         id:73,
        title: "I Tried the Viral TikTok Flour Bacon Hack and It Sucked",
        description: "Somedays I feel deeply disconnected from the “food content” traveling across social media, almost to the point of doubting my own powers of perception. Yesterday was such a day. On Facebook, I saw people coo over an obviously mealy, pale tomato before watchin…",
        url: "https://lifehacker.com/i-tried-the-viral-tiktok-flour-bacon-hack-and-it-sucked-1850512910",
        urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/eb0a5042dc416199be9eca8363971c04.jpg",
        publishedAt: "2023-06-07T14:00:00Z",
        content: "Somedays I feel deeply disconnected from the food content traveling across social media, almost to the point of doubting my own powers of perception. Yesterday was such a day. On Facebook, I saw peop… [+3943 chars]"
    },
    {
        category:"Food",
        id:74,
        title: "This Toybox 3D Printer for Kids Is on Sale Right Now",
        description: "Instead of buying new toys, now your child can design their own or choose from a growing catalog of printable toys online. The Toybox 3D printer is a kid-friendly toy printer that was first featured on Shark Tank; normally, you’d have to pay $419, but you can…",
        url: "https://lifehacker.com/this-toybox-3d-printer-for-kids-is-on-sale-right-now-1850509018",
        urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/d0ca96aee6ce85a394e4e2bc60681e4b.jpg",
        publishedAt: "2023-06-12T21:30:00Z",
        content: "Instead of buying new toys, now your child can design their own or choose from a growing catalog of printable toys online. The Toybox 3D printer is a kid-friendly toy printer that was first featured … [+1214 chars]"
    },
    {
         category:"Food",
         id:75,
        title: "Why There Are So Many Ticks in Your Yard (and What to Do About It)",
        description: "Ticks can find their way to and take up residence in your yard for a number of reasons. They can’t fly, so in many cases, they are carried by wildlife and rodents: rats, mice, raccoons, opossums, deer, rabbits, bats, and even birds. Otherwise, they climb on o…",
        url: "https://lifehacker.com/why-there-are-so-many-ticks-in-your-yard-and-what-to-d-1850534255",
        urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/88fb0ef7b28ec1f7cc2fd664a8563526.jpg",
        publishedAt: "2023-06-14T12:30:00Z",
        content: "Ticks can find their way to and take up residence in your yard for a number of reasons. They cant fly, so in many cases, they are carried by wildlife and rodents: rats, mice, raccoons, opossums, deer… [+2207 chars]"
    },
    {
      category:"Food",
      id:76,
      title: "Hot Days Call for Iced Pickles",
      description: "Many years ago, I dined at the now defunct New York City location of Mission Chinese, a restaurant that was plagued by labor issues and various scandals, the smallest (and least consequential) of which was their “iced Sichuan water pickles,” a dish of seasone…",
      url: "https://lifehacker.com/hot-days-call-for-iced-pickles-1850557992",
      urlToImage: "https://www.thoughtco.com/thmb/kYZ8HxmKEYU0A_XYRK7rG0moA64=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-sb10066792a-001-583b1d6f5f9b58d5b1b83b0f.jpg",
      publishedAt: "2023-06-21T13:00:00Z",
      content: "Many years ago, I dined at the now defunct New York City location of Mission Chinese, a restaurant that was plagued by labor issues and various scandals, the smallest (and least consequential) of whi… [+1900 chars]"
    },
    {
         category:"Food",
         id:77,
        title: "How to Shop for a Breast Pump (2023): Wearable Pumps, Portable Pumps, and Insurance Coverage",
        description: "Are the wearable pumps worth it? What does “hospital-grade” mean? Here's everything you need to know.",
        url: "https://www.wired.com/story/how-to-buy-a-breast-pump/",
        urlToImage: "https://i.guim.co.uk/img/media/30b79816951ee51f7e245a598a132f6b92ce6bab/0_27_3461_2078/master/3461.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=735207144e4c6c0a0e4f0344d9e51bdf",
        publishedAt: "2023-06-14T11:00:00Z",
        content: "Milk storage. Youll want bottles for the baby to drink out of (my son loved Lasinohs bottles), but if you want to store milk for longer than four daysthe maximum time the CDC recommends breast milk b… [+2798 chars]"
    },
    {
         category:"Food",
         id:78,
        title: "12 Best Deals: Portable Grills, Coolers, and Fitness Trackers",
        description: "Need an excuse to get outside and enjoy the sunshine? Some of our favorite outdoor gear is on sale right now.",
        url: "https://www.wired.com/story/weekend-deals-june-03-2023/",
        urlToImage: "https://i.guim.co.uk/img/media/c2602a36f514d83bf03144000257dc6a8615a685/0_0_2873_1725/master/2873.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=18ae96c7435ffd3208832fa10c4a41f4",
        publishedAt: "2023-06-03T11:00:00Z",
        content: "We haven't reached the summer solstice yet, but the first week of June always feels like the start of the season anyway. You might be all dealed out from last weekend's Memorial Day sales, but in cas… [+4907 chars]"
    },
    {
        category:"Food",
        id:79,
        title: "Climate change makes food scarce, but Yellowstone bears are staying fat",
        description: "Yellowstone grizzly bears beat the odds to be fat, despite climate change and dwindling food supplies.",
        url: "https://www.theverge.com/2023/6/2/23746860/yellowstone-grizzly-bears-climate-change",
        urlToImage: "https://cdn.vox-cdn.com/thumbor/tV22OXQQaCZSynRB9eRO_-R4_A4=/0x0:4692x2989/1200x628/filters:focal(2346x1495:2347x1496)/cdn.vox-cdn.com/uploads/chorus_asset/file/24698842/923446220.jpg",
        publishedAt: "2023-06-02T19:08:30Z",
        content: "Climate change makes food scarce, but Yellowstone bears are staying fat\r\nClimate change makes food scarce, but Yellowstone bears are staying fat\r\n / Scientists were pleasantly surprised to see the be… [+3286 chars]"
    },
    {
         category:"Food",
        id:80,
        title: "Amazon’s server outage is breaking fast food apps like McDonald’s and Taco Bell (and also The Verge)",
        description: "Amazon US-East-1 region has had better days, and if you’re trying to order fast food or buy a plane ticket, that might not work right now.",
        url: "https://www.theverge.com/2023/6/13/23759857/amazon-aws-down-outage-taco-bell-mcdonalds-burger-king",
        urlToImage: "https://cdn.vox-cdn.com/thumbor/gkI9G8zE9bgYl-ZrNFXfTVb9hus=/0x0:3235x1672/1200x628/filters:focal(1618x836:1619x837)/cdn.vox-cdn.com/uploads/chorus_asset/file/24725330/aws_fast_food.jpg",
        publishedAt: "2023-06-13T20:44:48Z",
        content: "Amazons server outage is breaking fast food apps like McDonalds and Taco Bell\r\nAmazons server outage is breaking fast food apps like McDonalds and Taco Bell\r\n / Amazon US-East-1 region has had better… [+2045 chars]"
    },
    {
         category:"Food",
         id:81,
        title: "Breville Joule Turbo review: sous vide with speed",
        description: "Breville’s new Joule Turbo is like any other sous vide, but it can cook things in as little as half the required time.",
        url: "https://www.theverge.com/23762514/breville-joule-turbo-sous-vide-review",
        urlToImage: "https://cdn.vox-cdn.com/thumbor/mmRVF4RX-In1xG-UiL1qKU-OOW0=/0x0:4080x3072/1200x628/filters:focal(2040x1536:2041x1537)/cdn.vox-cdn.com/uploads/chorus_asset/file/24730770/PXL_20230603_023609436.PORTRAIT.jpg",
        publishedAt: "2023-06-19T13:00:00Z",
        content: "Sous vide cooking can produce perfect meats every time, but it takes a long time to do so. Brevilles new Joule Turbo can pull the same tricks in as little as half the time.\r\nJun 19, 2023, 1:00 PM UTC… [+12968 chars]"
    },
    {
         category:"Food",
         id:82,
        title: "Apple wants to turn your iPhone into a pet-tracking camera",
        description: "Apple is releasing a new developer tool called DockKit that could pave the way for apps that control motorized phone mounts based on the movement of your pet.",
        url: "https://www.theverge.com/2023/6/7/23753103/apple-iphone-pet-tracking-camera-motorized-mount-dockkit",
        urlToImage: "https://cdn.vox-cdn.com/thumbor/9jH4z7Z8P3IWFEkNjdJ7qKyEWM8=/0x0:1800x1012/1200x628/filters:focal(900x506:901x507)/cdn.vox-cdn.com/uploads/chorus_asset/file/24710186/apple_docking_tracking_pets.png",
        publishedAt: "2023-06-07T22:44:44Z",
        content: "Apple wants to turn your iPhone into a pet-tracking camera\r\nApple wants to turn your iPhone into a pet-tracking camera\r\n / New tools allow developers to create apps that control motorized phone mount… [+2122 chars]"
    },
    {
         category:"Food",
         id:83,
        title: "Uber’s about to stick video ads in its cars, apps, and anywhere else it can",
        description: "Uber will soon start displaying up to 90-second-long video ads across its various services in the US, including Uber Eats, Drizly, and its namesake ride-hailing app",
        url: "https://www.theverge.com/2023/6/16/23763227/uber-video-advertising-ads-taxi-food-delivery-apps",
        urlToImage: "https://cdn.vox-cdn.com/thumbor/rjZ2oadTbONKgJiTilllBAb80NI=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23932657/acastro_STK106__03.jpg",
        publishedAt: "2023-06-16T11:45:00Z",
        content: "Ubers about to stick video ads in its cars, apps, and anywhere else it can\r\nUbers about to stick video ads in its cars, apps, and anywhere else it can\r\n / We know where you are, we know where you are… [+2518 chars]"
    },
    {
         category:"Food",
         id:84,
        title: "Pollution from gas stoves can be worse than secondhand smoke",
        description: "Gas stoves release a carcinogen called benzene that can build up in homes at concentrations higher than what’s found in secondhand smoke, according to Stanford research.",
        url: "https://www.theverge.com/23767216/pollution-gas-stoves-benzene-secondhand-smoke-stanford-study",
        urlToImage: "https://cdn.vox-cdn.com/thumbor/Vxu3yLVu3B7me55MKSCxu0vmUZ4=/0x0:4686x3124/1200x628/filters:focal(2343x1562:2344x1563)/cdn.vox-cdn.com/uploads/chorus_asset/file/24739006/1246478743.jpg",
        publishedAt: "2023-06-20T20:32:52Z",
        content: "Pollution from gas stoves can be worse than secondhand smoke\r\nPollution from gas stoves can be worse than secondhand smoke\r\n / A Stanford professor decided to give up his gas stove after seeing how m… [+5498 chars]"
    },
    {
      category:"Food",
      id:85,
      title: "McDonald's Serves Up a Brand New Game Boy Color Game in the Year 2023",
      description: "Although he started life as a villain in the McDonald’s cinematic universe, Grimace has come around and spent most of his 52 years as one of the fast food chain’s more endearing—yet confusing—mascots. To help celebrate his 52nd birthday, McDonald’s has commis…",
      url: "https://gizmodo.com/mcdonald-nintendo-game-boy-color-game-grimace-birthday-1850534966",
      urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/b1bbcd0f9a4a7c01e85678510c9798aa.jpg",
      publishedAt: "2023-06-13T18:43:59Z",
      content: "Although he started life as a villain in the McDonalds cinematic universe, Grimace has come around and spent most of his 52 years as one of the fast food chains more endearingyet confusingmascots. To… [+1807 chars]"
    },
    {
        category:"Food",
        id:86,
        title: "El Niño Is Here and It's Taking the Heat for the Death of 300 Wild Birds in Mexico",
        description: "El Niño is here and bringing record temperatures this June. As of this month, the global shift has officially arrived and is “expected to gradually strengthen into the Northern Hemisphere winter 2023-24,” according to a recent announcement from NOAA.Read more…",
        url: "https://gizmodo.com/el-nino-death-of-300-wild-birds-in-mexico-1850548032",
        urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/cd35f9b19824e9414d40516be8332b06.jpg",
        publishedAt: "2023-06-16T19:40:00Z",
        content: "El Niño is here and bringing record temperatures this June. As of this month, the global shift has officially arrived and is expected to gradually strengthen into the Northern Hemisphere winter 2023-… [+2195 chars]"
    },
    {
         category:"Food",
         id:87,
        title: "Company Resorts to Recruiting in American Truck Simulator Amid Driver Shortage",
        description: "A trucking company is appealing to video game simulator players in a new stunt to increase its number of drivers as an employee shortage continues to make things difficult in the industry. Schneider National recently released advertisements …",
        url: "https://gizmodo.com/american-truck-simulator-billboards-target-real-drivers-1850529432",
        urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/8cffe97ba6a264862dc5f40e6ab772d8.jpg",
        publishedAt: "2023-06-12T17:15:00Z",
        content: "A trucking company is appealing to video game simulator players in a new stunt to increase its number of drivers as an employee shortage continues to make things difficult in the industry. Schneider … [+3545 chars]"
    },
    {
        category:"Food",
        id:88,
        title: "J. Michael Straczynski Is Returning to Marvel For a New Captain America Run",
        description: "16 years ago, J. Michael Straczynski inadvertantly gave the Marvel Comics world one of the all time great Captain America moments in the pages of his Civil War-era run on Amazing Spider-Man. Now, it’s time for him to move: in a major return to the publisher, …",
        url: "https://gizmodo.com/j-michael-straczynski-captain-america-2023-reveal-1850499840",
        urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/0c3692a2eb62a07b788a25a9b843d99d.png",
        publishedAt: "2023-06-02T15:01:00Z",
        content: "16 years ago, J. Michael Straczynski inadvertantly gave the Marvel Comics world one of the all time great Captain America moments in the pages of his Civil War-era run on Amazing Spider-Man. Now, its… [+8356 chars]"
    },
    {
        category:"Food",
        id:89,
        title: "Google Claims Its AI Can Guess How a Shirt Will Fit on Every Body Type",
        description: "While some of us are gearing up for a Hot Girl Summer, Google is instead taking the shirt off of its AI features and letting them bask in the sun. One of the latest ways Google is trying to integrate generative AI into its existing products is helping users g…",
        url: "https://gizmodo.com/google-ai-virtual-try-on-how-will-this-top-fit-1850538062",
        urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c220a378cced3e04c923ef82f3801355.gif",
        publishedAt: "2023-06-14T16:02:00Z",
        content: "While some of us are gearing up for a Hot Girl Summer, Google is instead taking the shirt off of its AI features and letting them bask in the sun. One of the latest ways Google is trying to integrate… [+7799 chars]"
    },
    {
        category:"Food",
        id:90,
        title: "Amazon server outage makes some website go dark",
        description: "The outage is being resolved and affected web services for some fast food apps, airlines and others.",
        url: "https://www.bbc.co.uk/news/world-us-canada-65898999",
        urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/3E38/production/_130082951_026eb9be6e21385e3e8982666c421c7fab27dd1c.jpg",
        publishedAt: "2023-06-13T22:32:13Z",
        content: "Amazon Web Services (AWS) experienced a wide-reaching outage on Tuesday afternoon, which affected countless major websites. \r\nAWS is a cloud computing offering that makes money by charging businesses… [+1278 chars]"
    },
    {
      category:"Food",
      id:91,
      title: "Sudan conflict: Rockets hit Khartoum market as talks collapse",
      description: "It caused the most civilian casualties in a single incident in the capital since the war began.",
      url: "https://www.bbc.co.uk/news/world-africa-65777311",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/14659/production/_129954538_gettyimages-1258347635_afp.jpg",
      publishedAt: "2023-06-01T12:19:00Z",
      content: "Rockets hit a market in Sudan's capital, Khartoum, killing 18 people and leaving more than 100 wounded, doctors and residents say.\r\nThe fighting between rival military forces comes as truce talks med… [+2413 chars]" 
    },
    {
      category:"Food",
      id:92,
      title: "Ukraine offensive: BBC visits village liberated from Russian control",
      description: "Neskuchne in Donetsk region saw the heaviest fighting according to the battalion which liberated it.",
      url: "https://www.bbc.co.uk/news/world-europe-65894743",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/09C1/production/_130079420_liberatedvillage004.jpg",
      publishedAt: "2023-06-13T14:36:09Z",
      content: "The BBC is among the first media organisations to gain access to some of the first villages liberated in Ukraine's counteroffensive. \r\nOut of this cluster of four settlements in the eastern Donetsk r… [+1744 chars]"
    },

    //Fitness category
    {
      category:"Fitness",
      id:93,
      title: "'Lung Detoxes' Are the TikTok Myth of the Week",
      description: "Scrolling through health or fitness TikTok this week, you might land on a video that explains it will give you a test for your lung health. The instructions vary, but you’ll be told to hold your breath while you watch an animated timer tick down. “If you can …",
      url: "https://lifehacker.com/lung-detoxes-are-the-tiktok-myth-of-the-week-1850500657",
      urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/766eb8bf996617062fddbfa8a65e1749.jpg",
      publishedAt: "2023-06-02T19:30:00Z",
      content: "Scrolling through health or fitness TikTok this week, you might land on a video that explains it will give you a test for your lung health. The instructions vary, but youll be told to hold your breat… [+5082 chars]"
    },
    {
           category:"Fitness",
           id:94,
          title: "The Four Best Reddit Alternatives",
          description: "Reddit is melting down before our eyes. Its CEO is engaging in wilder and wilder tactics to try to subvert the protests that began last week. Some subreddits have seen their moderation teams replaced or entirely removed, meaning that even when the dust settle…",
          url: "https://lifehacker.com/the-four-best-reddit-alternatives-1850562547",
          urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/b0132dd71dcf072934510327c19a11a3.jpg",
          publishedAt: "2023-06-22T13:00:00Z",
          content: "Reddit is melting down before our eyes. Its CEO is engaging in wilder and wilder tactics to try to subvert the protests that began last week. Some subreddits have seen their moderation teams replaced… [+4422 chars]"
    },
    {
           category:"Fitness",
           id:95,
          title: "Fitbit's Inspire 3 fitness tracker is 20 percent off right now",
          description: "Fitbit makes some of the best fitness trackers\r\n around and a couple of our favorite models are currently on sale. The Inspire 3 has dropped to $80\r\n, which is $20 off the usual price. It's only $10 more than the record low price of $70, which we saw the fitn…",
          url: "https://www.engadget.com/fitbits-inspire-3-fitness-tracker-is-20-percent-off-right-now-144652301.html",
          urlToImage: "https://s.yimg.com/uu/api/res/1.2/ndeKy2lvaT9xld1UCYogzA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2021-09/7aa28b90-1fb4-11ec-bbff-102b321bbc00.cf.jpg",
          publishedAt: "2023-06-08T14:46:52Z",
          content: "Fitbit makes some of the best fitness trackers\r\n around and a couple of our favorite models are currently on sale. The Inspire 3 has dropped to $80\r\n, which is $20 off the usual price. It's only $10 … [+1442 chars]"
    },
    {
          category:"Fitness",
          id:96,
          title: "Apple Watch Series 8 is back on sale for $329",
          description: "This is a good moment to get an Apple smartwatch if you're more discount about about concerned about discount than anything else.Amazon is once selling the Apple Watch Series a 41mm case and GPS for $329, or a steep $70 discount that's very nearly a record low.or a steep $70 discount...",
          url: "https://www.engadget.com/apple-watch-series-8-is-back-on-sale-for-329-141547847.html",
          urlToImage: "https://s.yimg.com/uu/api/res/1.2/ovCEHeO.oc9YDmz.wbsKUQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/398c6da0-ee67-11ed-bfa7-872a4ff5351c.cf.jpg",
          publishedAt: "2023-06-19T14:15:47Z",
          content: "This is a good moment to get an Apple smartwatch if you're more concerned about price than anything else. Amazon is once more selling the Apple Watch Series 8 with a 41mm case and GPS for $329, or a … [+1427 chars]"
    },
    {
          category:"Fitness",
          id:97,
          title: "The Morning After: What to expect from Apple’s WWDC 2023",
          description: "Apple’s big developer conference kicks off June 5th, and all the signs point to the company’s mixed reality headset making its first appearance. The tech giant has been acquiring headset-friendly startups\r\n for years, and if the rumors are true, Apple’s stand…",
          url: "https://www.engadget.com/the-morning-after-what-to-expect-from-apples-wwdc-2023-111535949.html",
          urlToImage: "https://i.guim.co.uk/img/media/547bbb5421efdb0d13a7aef1bda3240fc7b2f829/0_161_4932_2960/master/4932.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e3e72b220dbe1c8c49b03fed55f2a530",
          publishedAt: "2023-06-01T11:15:35Z",
          content: "Apples big developer conference kicks off June 5th, and all the signs point to the companys mixed reality headset making its first appearance. The tech giant has been acquiring headset-friendly start… [+3804 chars]"
    },
    {
          category:"Fitness",
          id:98,
          title: "15 Best Deals: Home, Health, and the Outdoors",
          description: "Take a deep breath, get up, and start moving with discounts on air purifiers, fitness trackers, and electric mowers.",
          url: "https://www.wired.com/story/weekend-deals-june-17-2023/",
          urlToImage: "https://i.guim.co.uk/img/media/9e82374a96f4b7f1a8203c5b1c04585798328772/0_344_5184_3110/master/5184.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0699a9f297b9c5749b6b7616065b6737",
          publishedAt: "2023-06-17T11:00:00Z",
          content: "Ready for summer? It's right around the cornerJune 21 is the summer solstice. For our final weekend deals post of spring, we're highlighting deals that'll keep you and your home fresh. From breathing… [+6676 chars]"
    },
    {
          category:"Fitness",
          id:99,
          title: "The Top New Features in Apple's WatchOS 10: Device Compatibility, Release Date",
          description: "The company’s quest to unseat Garmin continues with a new fullscreen cycling mode and other navigation features.",
          url: "https://www.wired.com/story/apple-watchos-10-new-features/",
          urlToImage: "https://i.guim.co.uk/img/media/eefe53170b49416f38415d4dc954a643749b7660/0_82_2079_1247/master/2079.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=cd18a58b7b277362cb33104cc2f6b6af",
          publishedAt: "2023-06-09T11:00:00Z",
          content: "Last year, Apple introduced the Apple Watch Ultra, a fitness wearable meant to compete with Garmin in the premium outdoor watch category. The Ultra didnt quitemeet the markfor starters, battery life … [+3431 chars]"
    },
    {
           category:"Fitness",
           id:101,
          title: "12 Best Deals: Portable Grills, Coolers, and Fitness Trackers",
          description: "Need an excuse to get outside and enjoy the sunshine? Some of our favorite outdoor gear is on sale right now.",
          url: "https://www.wired.com/story/weekend-deals-june-03-2023/",
          urlToImage: "https://i.guim.co.uk/img/media/eefe53170b49416f38415d4dc954a643749b7660/0_82_2079_1247/master/2079.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=cd18a58b7b277362cb33104cc2f6b6af",
          publishedAt: "2023-06-03T11:00:00Z",
          content: "We haven't reached the summer solstice yet, but the first week of June always feels like the start of the season anyway. You might be all dealed out from last weekend's Memorial Day sales, but in cas… [+4907 chars]"
    },
    {
          category:"Fitness",
          id:102,
          title: "Garmin Edge 840 Solar Review: A Data-Rich Bike Computer",
          description: "Garmin’s update to one of our favorite solar-powered cycling computers puts all the ride and fitness stats you’d ever want to see on your handlebars.",
          url: "https://www.wired.com/review/garmin-edge-840-solar-bike-computer/",
          urlToImage: "https://i.guim.co.uk/img/media/581e70b4f44136b31995b2168ab76928e3a6c73e/0_99_1793_1076/master/1793.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5b7a447b54a167ae1b2c368dd2b2c253",
          publishedAt: "2023-06-12T12:00:00Z",
          content: "Since the 1040 debuted last year, Garmin has updated several wayfinding features in the Edge 840 Solar to make them more specific to cycling. Its maps are now ride-type specific, highlighting popular… [+1916 chars]"
    },
    {
          category:"Fitness",
          id:103,
          title: "Here are more than 75 digital gifts you can still pick up for Father’s Day",
          description: "Whether your dad is a film lover or a fitness fan, we’ve rounded up a list of digital gifts you can buy online no matter what your father is into or what your budget is.",
          url: "https://www.theverge.com/23642026/best-digital-gift-ideas-online-cards-subscriptions",
          urlToImage: "https://cdn.vox-cdn.com/thumbor/HfGkuc2aMaf2a_ncOePEY3OuCvQ=/0x0:920x613/1200x628/filters:focal(460x307:461x308)/cdn.vox-cdn.com/uploads/chorus_asset/file/24731235/pelotonapp.jpg",
          publishedAt: "2023-06-16T17:15:04Z",
          content: "Here are more than 75 digital gifts you can still pick up for Fathers Day\r\nHere are more than 75 digital gifts you can still pick up for Fathers Day\r\n / If you still havent picked up a Fathers Day gi… [+10461 chars]"
    },
    {
          category:"Fitness",
          id:104,
          title: "Journal is Apple’s new journaling app for iOS",
          description: "Apple has unveiled Journal, a new journaling app for iOS that allows iPhone users to regularly log their daily activities",
          url: "https://www.theverge.com/2023/6/5/23738869/apple-journal-app-ios-iphone-wwdc-2023",
          urlToImage: "https://cdn.vox-cdn.com/thumbor/m37go-Nr5SFoeMfwQ6x9bpbuxNg=/0x0:2300x1292/1200x628/filters:focal(1150x646:1151x647)/cdn.vox-cdn.com/uploads/chorus_asset/file/24703720/Screen_Shot_2023_06_05_at_6.30.26_PM.png",
          publishedAt: "2023-06-05T17:33:25Z",
          content: "Image: Apple\r\n\n \n\n Apple has unveiled Journal, a new journaling app for iOS that allows iPhone users to regularly log their daily activities. Announced at Apple’s Worldwide Developers Conference on M… [+1068 chars]"
    },
    {
          category:"Fitness",
          id:105,
          title: "Sky launches TV webcam for video calling and watch parties",
          description: "Sky has launched a Sky Live camera that lets you watch TV simultaneously with other households, supports making video calls over Zoom, and can track home workouts.",
          url: "https://www.theverge.com/2023/6/22/23769585/sky-live-camera-satellite-broadcaster-watch-party-video-call-kinect-motion-controlled-games",
          urlToImage: "https://cdn.vox-cdn.com/thumbor/aD65E0hW02Zy6uvW8XI5bVyWmjs=/0x0:1068x712/1200x628/filters:focal(534x356:535x357)/cdn.vox-cdn.com/uploads/chorus_asset/file/24742798/unnamed__1_.jpeg",
          publishedAt: "2023-06-22T11:26:48Z",
          content: "Sky launches TV webcam for video calling and watch parties\r\nSky launches TV webcam for video calling and watch parties\r\n / The Sky Live is a new camera thats compatible with the Comcast-owned broadca… [+3760 chars]"
    },
    {
          category:"Fitness",
          id:106,
          title: "Apple’s biggest iPad Pro with a fast M2 processor is $99 off",
          description: "The 2022 iPad Pro with M2 is now $999.99 at Amazon. Today also brings nice deals on the Oura Ring 3, Fitbit Sense 2, Sega Genesis Mini 2, and more.",
          url: "https://www.theverge.com/2023/6/8/23753119/ipad-pro-m2-oura-ring-fitbit-sense-sega-genesis-mini-deal-sale",
          urlToImage: "https://cdn.vox-cdn.com/thumbor/_cmcV4Aru0qm6dPp3kCMl7abOK8=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24143279/226374_iPad_Pro_12.9_M2_2022_DSeifert_0006.jpg",
          publishedAt: "2023-06-08T15:36:49Z",
          content: "Apples biggest iPad Pro with a fast M2 processor is $99 off\r\nApples biggest iPad Pro with a fast M2 processor is $99 off\r\n / The latest 12.9-inch iPad Pro with that awesome Mini LED screen finally ha… [+5980 chars]"
    },
    {
          category:"Fitness",
          id:107,
          title: "Doctor Who Is Bringing Back One of Its Most Controversial Companions",
          description: "Doctor Who usually likes to save its returning stars for anniversary events, but with the upcoming trilogy of specials to celebrate its blockbuster 60th already jam-packed, now it’s up to Doctor Who’s 14th season to shoulder a few surprise appearances—and its…",
          url: "https://gizmodo.com/doctor-who-season-14-mel-bush-bonnie-lanford-disney-bbc-1850516815",
          urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/516cad6ad41b01535b00d08df825fbb5.jpg",
          publishedAt: "2023-06-07T22:30:00Z",
          content: "Doctor Who usually likes to save its returning stars for anniversary events, but with the upcoming trilogy of specials to celebrate its blockbuster 60th already jam-packed, now its up to Doctor Whos … [+2809 chars]"
    },
    {
          category:"Fitness",
          id:108,
          title: "watchOS 10 brings widgets and new corner icons to Apple’s wearable",
          description: "It'll be one of the more notable recent watchOS updates.",
          url: "https://arstechnica.com/gadgets/2023/06/watchos-10-brings-widgets-and-new-corner-icons-to-apples-wearable/",
          urlToImage: "https://cdn.arstechnica.net/wp-content/uploads/2023/06/Screenshot-2023-06-05-at-1.06.59-PM-760x380.jpg",
          publishedAt: "2023-06-05T18:15:54Z",
          content: "4 with \r\n<ul><li>\r\n</li><li>\r\n A widget of complications. \r\n</li><li>\r\n</li><li>\r\n</li><li>\r\n A topographical view in maps. \r\n</li><li>\r\n Golf and tennis swing apps. \r\n</li></ul>\r\nCUPERTINO, Calif.Ap… [+1675 chars]"
    },
    {
          category:"Fitness",
          id:109,
          title: "Dealmaster: Savings on maker tools and board games",
          description: "Keep summer crafty with savings on a range of maker tools.",
          url: "https://arstechnica.com/shopping/2023/06/dealmaster-savings-on-maker-tools-and-board-games/",
          urlToImage: "https://cdn.arstechnica.net/wp-content/uploads/2019/08/GettyImages-537099371-760x380.jpg",
          publishedAt: "2023-06-07T14:48:56Z",
          content: "3 with \r\nGraduation season is upon us, and if you're looking for a way to keep your kids busy this summer while school is out, consider some maker tools! From Cricut machines to 3D printers, these to… [+10124 chars]"
    },
    {
      category:"Fitness",
      id:110,
      title: "Dealmaster: Power tools, laptops, gaming accessories, and more",
      description: "Top summer savings on tech products, from power tools to gaming laptops.",
      url: "https://arstechnica.com/shopping/2023/06/dealmaster-power-tools-laptops-gaming-accessories-and-more/",
      urlToImage: "https://cdn.arstechnica.net/wp-content/uploads/2020/05/Razer-Blade-Pro-17-760x380.jpg",
      publishedAt: "2023-06-22T00:12:36Z",
      content: "Enlarge/ The Razer Blade Pro 17 gaming laptop.\r\n4 with \r\nWhether you spend your summer relaxing with a new gaming laptop or grab some new power tools for home repairs, there are plenty of ways to sta… [+9847 chars]"
    },
    {
          category:"Fitness",
          id:111,
          title: "Dealmaster: Summer savings on laptops, smartphones, and smartwatches",
          description: "With savings on laptops and smartphones, now is a great time to upgrade your gear.",
          url: "https://arstechnica.com/shopping/2023/06/dealmaster-summer-savings-on-laptops-smartphones-and-smartwatches/",
          urlToImage: "https://cdn.arstechnica.net/wp-content/uploads/2018/07/180711_MacBookPro_NewYorkCity_BK_41579-760x380.jpg",
          publishedAt: "2023-06-16T11:15:28Z",
          content: "0 with \r\nIf you haven't started your summer vacation, you can be opportunistic and save money by refreshing your laptop. We've rounded up some of the top deals from Apple, Dell, HP, and Lenovo if you… [+9540 chars]"
    },
    {
          category:"Fitness",
          id:112,
          title: "Everything Apple Watch does for bicycles could be built for wheelchairs but it isn't",
          description: "The biggest players in the wearable fitness game don't seem to care about people in wheelchairs.",
          url: "https://www.androidcentral.com/wearables/everything-apple-watch-does-for-bicycles-could-be-built-for-wheelchairs-but-it-isnt",
          urlToImage: "https://cdn.mos.cms.futurecdn.net/nougart6JNp9bxXvm9e7G5-1200-80.jpeg",
          publishedAt: "2023-06-10T15:00:00Z",
          content: "Apple is one of the three companies (with Google and Samsung following far behind) that are the major players when it comes to wearable fitness products. As part of its latest software updates, Apple… [+4431 chars]"
    },
    {
          category:"Fitness",
          id:113,
          title: "Garmin Forerunner 265 vs. Samsung Galaxy Watch 5: Which should athletes buy?",
          description: "The Galaxy Watch 5 has some decent fitness tools through Samsung Health or third-party Wear OS apps, at a lower price than the Forerunner 265. But should athletes really buy it?",
          url: "https://www.androidcentral.com/wearables/garmin-forerunner-265-vs-samsung-galaxy-watch-5",
          urlToImage: "https://cdn.mos.cms.futurecdn.net/SzhM3mmF7vqMjhPtRaoLzA-1200-80.jpeg",
          publishedAt: "2023-06-17T17:30:42Z",
          content: "With so many fitness subscriptions out there, it's nice to find smartwatches out there like the Garmin Forerunner 265 and Samsung Galaxy Watch 5 that truly cost what it shows on the box. Each of them… [+15305 chars]"
    }
  ]);
  return (
    <div>
      <MyContext.Provider value={[data,setData]}>
            {props.children}
        {/* <Bollywood/>
        <Hollywood/>
        <Technology/>
        <Fitness/>
        <Food/> */}
      </MyContext.Provider>
    </div>
  )
}

export default DataPackage
