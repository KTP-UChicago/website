export interface Review {
    courseName: string;
    courseInstructor?: string;
    dept: string;
    courseType: string;
    coursePrereqs?: string;
    comments: string[];
    quarters: string[];
}

export const REVIEWS: Review[] = [
    {
      "courseName": "CMSC 14100: Introduction to Computer Science (Rogers)",
      "courseInstructor": "Rogers",
      "dept": "CMSC",
      "courseType": "CS Major Requirement",
      "coursePrereqs": "Prerequisites: None",
      "comments": [
        "(Laura 2023) Rogers is kinda scary but she’s very organized and overall good prof",
        "(Mahum 2023) Rogers is hands down one of the best lecturers I have ever had",
        "(Joshua 2023) Do not cheat in this class [true for every class but especially for Rogers]. Agree with Laura, she’s scary but very good at her job",
        "(Zelia 2023) I had Rogers for 152, and I thought she was great. Her class was really organized and I felt like she was really good at explaining things both in class and in lectures. She is a bit scary and also very strict on the whole academic dishonesty thing, but overall 100% worth to have her as a prof",
        "(Nicholas 2024) Rohan and I have been cursed to TA for her eternally. She is really good at her job and extremely organized, but she is definitely quite strict. Don’t crack your knuckles in her class, she yelled at Andi during our first TA meeting 😢.",
        "(Quincy 2024) She’s very controversial and I can see why that is the case. She’s very particular about certain things and can be strict for no reason, but overall a good professor who is organized and cares a lot about teaching."
      ],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "CMSC 14100: Introduction to Computer Science I (Morgan)",
      "courseInstructor": "Morgan",
      "dept": "CMSC",
      "courseType": "CS Major Requirement",
      "coursePrereqs": "Prerequisites: None",
      "comments": [
        "(Laura 2023) Morgan is like the younger nicer version of Rogers. Good prof",
        "(Pratham 2023) I liked Morgan a lot, she’s very by the book and a straightforward lecturer",
        "(Clarice 2024) I had Morgan for 142 and I liked her a lot. Clear, willing to help.",
        "(Quincy 2024) Lowkey not a big fan of Morgan. Had her for 142 and she always seemed very confused and incoherent during lectures."
      ],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "CMSC 14100: Introduction to Computer Science I (Lee)",
      "courseInstructor": "Lee",
        "dept": "CMSC",
        "courseType": "CS Major Requirement",
        "coursePrereqs": "Prerequisites: None",
      "comments": [],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "CMSC 14100: Introduction to Computer Science I (Holtzman)",
        "courseInstructor": "Holtzman",
        "dept": "CMSC",
        "courseType": "CS Major Requirement",
        "coursePrereqs": "Prerequisites: None",
      "comments": [],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "CMSC 14200: Introduction to Computer Science (Shaw)",
      "courseInstructor": "Shaw",
      "dept": "CMSC",
      "courseType": "CS Major Requirement",
      "comments": [
        "(Ellen) sometimes I love him, sometimes im meh ab him. sometimes he'll add unnecessary comments when answering questions, like dumb questions do exist lol. but amazing lecturer + super well rounded individual.",
        "(Pratham) love Shaw this guy is the goat. Genuinely passionate about helping you learn and a very nice guy",
        "(Joshua) Take with Shaw. I had him for 151 and he was very good"
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 14400: Systems Programming II (Li, Zhao)",
        "courseInstructor": "Li, Zhao",
        "dept": "CMSC", 
      "courseType": "CS Major Requirement",
      "comments": [],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "CMSC 27100: Discrete Mathematics (Fefferman)",
      "courseInstructor": "Fefferman",
      "dept": "CMSC",
      "courseType": "Theory Requirement",
      "comments": [
        "(Nicholas 2024) The drive is your best friend with him. But if you actually want to learn, take Ng."
      ],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "CMSC 14300: Systems Programming I (Wachs)",
      "courseInstructor": "Wachs",
      "dept": "CMSC",
      "courseType": "CS Major Requirement",
      "comments": [
        "(Laura 2023) I’m currently grading for him and I’m honestly not getting great organizational vibes because he gives the graders way too much power lol",
        "(Tanvi 2023) Lowkey, love Wachs. Very sweet and decent lecturer. The only issue is that his instructions are confusing. ",
        "(Clarice 2024) Not a huge fan of Wachs, had him for 143. He is not horrible, he just made unnecessary tangents, had handwritten backboard notes (no lecture slides and no notes released outside of class). His tests were manageable but the projects and homework were more extensive than previous profs. His tests are straightforward. If you can get the Spring 2023 lecture slides for 143 those were very helpful.  ",
        "(Iris 2024) I TA-ed for him and he is pretty generous about giving extensions if you make a private post about it so he seems like a nice guy."
      ],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "CMSC 27100: Discrete Mathematics (Ng)",
      "courseInstructor": "Ng",
      "dept": "CMSC",
      "courseType": "Theory Requirement",
      "comments": [
        "(Catherine 2024) Such a big fan of Ng, he’s a phenomenal lecturer and has great online notes. There’s weekly quizzes which force you to not fall behind on material but they’re lowkey chill bc of his unique grading scheme (I personally liked it but not everyone did). Would second Nicholas ^ taking Ng actually makes you learn the material"
      ],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "CMSC 27130: Discrete Mathematics (Razborov)",
      "courseInstructor": "Razborov",
      "dept": "CMSC",
      "courseType": "Theory",
      "comments": [],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "CMSC 27700: Mathematical Logic I (Malliaris)",
      "courseInstructor": "Malliaris",
      "dept": "CMSC",
      "courseType": "Theory",
      "comments": [],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "CMSC 28100: Introduction to Complexity Theory (Simon)",
      "courseInstructor": "Simon",
      "dept": "CMSC",
      "courseType": "Theory",
      "comments": [
        "(Minjoo 2024) I took Hoza, but it is like the last unit of algos but more in depth (P vs NP, Turing machines, etc). Topics are genuinely interesting and are useful for shelling out your understanding of how algorithms are actually quantified, but as someone who sucks at proofs / doesn’t have a heavy math background I’m definitely struggling a bit. I think Hoza’s generally pretty good at explaining things and gives good responses to questions (even stupid ones) though. Also his digital footprint is crazy",
        "(Joshua) Had him for Discrete, Simon was not very good at lecturing. But overall not that bad of a class and he was super accommodating for exams"
      ],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "CMSC 28400: Introduction to Cryptography (Cohen)",
      "courseInstructor": "Cohen",
      "dept": "CMSC",
      "courseType": "Theory",
      "comments": [],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "CMSC 22100: Programming Languages (Shaw)",
      "courseInstructor": "Shaw",
      "dept": "CMSC",
      "courseType": "Programming Languages & Systems",
      "comments": [
        "(Abby 2023) Full disclosure I haven’t taken this class but Shaw was super accommodating when I got super sick in the middle of the quarter and had to push all of my deadlines back a week for like two and a half weeks - he is super kind and his office hours (and his TAs office hours) are super well done (again, for PL but I have heard equally amazing things about this other courses)",
        "(Nicholas 2024): This class is pretty interesting and chill, you learn a lot about creating and defining a language, – however it is not the most useful class you’ll ever take here as everything you learn in it is not really applicable to the real world. "
      ],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "CMSC 23000: Operating Systems (Gunawi)",
      "courseInstructor": "Gunawi",
      "dept": "CMSC",
      "courseType": "Programming Languages & Systems",
      "comments": [],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "CMSC 23320: Foundations of Computer Networks (Sotomayor)",
      "courseInstructor": "Sotomayor",
      "dept": "CMSC",
      "courseType": "Programming Languages & Systems",
      "comments": [
        "(Laura 2023) Borja was really good in software dev, I kind of despise him in Networks though. But overall extremely smart, organized, great presenter",
        "(Olivia 2023) Agree with Laura, great at teaching and presenting and you will likely learn a lot. Also pretty nice but not necessarily easy",
        "(Iris 2024) Very interesting but very time-consuming, the grading scheme is suspiciously forgiving because you could resubmit all projects and retake all quizzes, but it’s best to attempt to do well the first time around or else you’ll get swamped lol. But you will learn a lot and it’s pretty useful knowledge. Iconic class",
        "(Spencer 2024) If you like C, definitely take it. Borja is so entertaining (especially his T-shirts), and he is very good at presenting the information in a clear way. The projects take a good amount of time though…..so be warned if you are planning on taking this with another heavy cs class. (also completely agree with Iris, it really is an iconic class)"
      ],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "CMSC 20300: Introduction to Human-Computer Interaction (Lopes)",
      "courseInstructor": "Lopes",
      "dept": "CMSC",
      "courseType": "Human Computer Interaction",
      "comments": [
        "(Olivia) I have Lopes for HCI rn (not this class) and he is a really great and engaging lecturer and makes class interesting. He does do in class activities for HCI so you actually have to show up to every class usually. Also gives a good amount of HW and projects so not a free easy class (at least for HCI idk about this class specifically)",
        "(Nicholas 2024) This class was hella anal, the projects are really open ended but they don’t teach you how to use the technologies that are required for the projects so you are just stuck trying to make your dumb VR headset work in Crerar at 4 AM in the morning. The lectures themselves are interesting, but completely unrelated to the projects. "
      ],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "CMSC 20310: Introduction to Designing Interaction (Nakagaki)",
      "courseInstructor": "Nakagaki",
      "dept": "CMSC",
        "courseType": "Human Computer Interaction",
      "comments": [],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "CMSC 21400: Creative Machines and Innovation Instrumentation (Staff)",
        "courseInstructor": "Staff",
      "dept": "CMSC",
        "courseType": "Elective",
      "comments": [
        "(Pratham) My roommate took this and TA’s for it now- seems like a very easy class that’s super interesting/engaging, but it might take a large volume of hours"
      ],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "CMSC 23206: Security, Privacy, and Consumer Protection (Feamster)",
      "courseInstructor": "Feamster",
      "dept": "CMSC",
      "courseType": "Elective",
      "comments": [],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "CMSC 23218: Surveillance Aesthetics: Provocations About Privacy and Security in the Digital Age (Ur)",
      "courseInstructor": "Ur",
      "dept": "CMSC",
        "courseType": "Elective",
      "comments": [],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "CMSC 23740: Introduction to Real-time Graphics (Reppy)",
      "courseInstructor": "Reppy",
      "dept": "CMSC",
        "courseType": "Elective",
      "comments": [
        "(Laura 2022) I’ve heard such terrible things about this professor that i’m actually curious how bad he can be haha"
      ],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "CMSC 25300: Mathematical Foundations of Machine Learning (Li)",
      "courseInstructor": "Li",
      "dept": "CMSC",
      "courseType": "Elective",
      "comments": [],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "CMSC 25300: Mathematical Foundations of Machine Learning (Willett)",
      "courseInstructor": "Willett",
      "dept": "CMSC",
      "courseType": "Elective",
      "comments": [
        "(Pratham 2023) Took this with Willett/Jonas Fall 2022. Having some basic linear algebra background is helpful for this. Would recommend taking math 196 lin alg before this if you can or just learning the basic matrix/vector operations. I liked the class a lot as a whole and learned a ton– def one of my favorite classes I’ve taken. All the material is approachable on the whole. Having some background on the intuition behind many of the models might be helpful.",
        "(David 2023) took this class last quarter with Willett/Jonas—I thought it was a pretty solid intro to ML, made much easier if you have some linear algebra/data analysis experience. Would recommend it if you're considering exploring ML, but fair warning that this is basically a linear algebra class, the amount of coding you do isn’t that much. idk how it’ll be under Haifeng but heard he’s a legend for algos this quarter",
        "(Iris 2024) Rebecca is a 🐐and there are also lots of *materials* floating around for this course, though I have heard they changed it up a bit so maybe nevermind. Definitely still worth taking though IMO because you can do a little Python and a little maths."
      ],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "CMSC 25300: Mathematical Foundations of Machine Learning (Maire)",
      "courseInstructor": "Maire",
      "dept": "CMSC",
      "courseType": "Elective",
      "comments": [],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "CMSC 25422: Machine Learning for Computer Systems (Feamster)",
      "courseInstructor": "Feamster",
      "dept": "CMSC",
      "courseType": "Elective",
      "comments": [],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "CMSC 25460: Introduction to Optimization (Orecchia)",
      "courseInstructor": "Orecchia",
      "dept": "CMSC",
      "courseType": "Elective",
      "comments": [
        "(Katie 2023) Had him for algos, Orecchia is a bit unorganized, sometimes it’s hard to read the board but overall nice. We had a really good TA, Jonathan Liu from Berkeley who basically carried the entire class",
        "(David 2023) Had him for algos, Orecchia without Jonathan is probably just eh. He’s not a terrible prof but also not one of the best"
      ],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "DATA 11800: Introduction to Data Science I (Lange)",
      "courseInstructor": "Lange",
      "dept": "DATA",
      "courseType": "DS Major Requirement",
      "comments": [],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "DATA 11800: Introduction to Data Science I (Kube)",
      "courseInstructor": "Kube",
      "dept": "DATA",
        "courseType": "DS Major Requirement",
      "comments": [],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "DATA 11800: Introduction to Data Science I (Trimble)",
      "courseInstructor": "Trimble",
      "dept": "DATA",
        "courseType": "DS Major Requirement",
      "comments": [],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "DATA 11800: Introduction to Data Science I (Staff)",
      "courseInstructor": "Staff",
      "dept": "DATA",
        "courseType": "DS Major Requirement",
      "comments": [],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "DATA 11900: Introduction to Data Science II (Biron)",
      "courseInstructor": "Biron",
      "dept": "DATA",
        "courseType": "DS Major Requirement",
      "comments": [],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "DATA 13600: Introduction to Data Engineering (Trimble)",
      "courseInstructor": "Trimble",
      "dept": "DATA",
      "courseType": "Elective",
      "comments": [],
      "quarters": ["Autumn 2024"]
    },
    {
      "courseName": "ECON 10200: Principles of Macroeconomics (Pieters)",
      "courseInstructor": "Pieters",
      "dept": "ECON",
    "courseType": "Biz Econ Major Requirement",
      "coursePrereqs": "Prerequisites: None",
      "comments": [
        "(Boen) IMO Pieters was a great lecturer and presented concepts in a clear organized manner. She has 6 “quizzes” where the four highest scores are taken, with a hard cutoff for an A (slight adjustments each year), so it is annoying to be constantly studying for those. Also there's basically no hw after week 5 cuz you max out the homework grading component. I think her general reputation is slightly harder than most macro profs tho."
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 14200: Introduction to Computer Science II (Sotomayor Basilio)",
      "courseInstructor": "Sotomayor Basilio",
      "dept": "CMSC",
       "courseType": "CS Major Requirement",
      "comments": [
        "(Laura) Borja was really good in software dev, I kind of despise him in Networks though. But overall extremely smart, organized, great presenter",
        "(Olivia) Agree with Laura, great at teaching and presenting and you will likely learn a lot. Also pretty nice but not necessarily easy"
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 20370: Inclusive Technology: Designing for Underserved and Marginalized Populations (Chetty)",
      "courseInstructor": "Chetty",
      "dept": "CMSC",
        "courseType": "Human Computer Interaction",
      "comments": [
        "(Ellen) Superrr chill cs class, i enjoyed + rec (esp in a heavier quarter, i took this w algos + metrics and it was so fine) although not sure what i really learned haha",
        "(Joshua) Was such a chill class, super easy elective. Very chill professors and homework assignments!",
        "(Chelsea) Easy class and the prof is so sweet and helpful. PRO TIP if you’re waitlisted and want to get in, email the professor and tell her you already have a group and that you’ve done some readings. Show up to class ofc but also she said she’s willing to let people in after the deadline if they already have a group"
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 22240: Computer Architecture for Scientists (Chien)",
      "courseInstructor": "Chien",
      "dept": "CMSC",
      "courseType": "Programming Languages & Systems",
      "comments": [
        "(Max) Lectures are boring, labs are ok, friendly guy but lectures are mid",
        "(Olivia) Had Chien for 154, nice but kinda boring, not bad tho",
        "(Zelia) Had him for 154. He’s meh. Not helpful outside of class. His lectures do the job but they’re boring and he could be much better at explaining things"
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 22300: Functional Programming (Chugh)",
      "courseInstructor": "Chugh",
      "dept": "CMSC",
      "courseType": "Programming Languages & Systems",
      "comments": [
        "(Laura) I took 161 and it’s basically the same. Ravi is a really good and nice professor, 161 was super hard but functional programming is a REALLY useful topic and Haskell is really cool. So I would recommend"
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 22880: Introduction to Quantum Computing (Franklin)",
      "courseInstructor": "Franklin",
      "dept": "CMSC",
        "courseType": "Elective",
      "comments": [
        "(Ellen) literally my least favorite prof I’ve had so far at uchicago",
        "(Pratham) I’ve done research with her (so has Shivani and Minjoo) and she’s a sweet person but people really don’t like her teaching",
        "(Chelsea) didn’t take this class but she was such a bitch to me when I requested to join LOL",
        "(Eric) Content not hard; just watch out for gradescope autograders being buggy. Overall it’s pretty chill, average on midterm was like a 90%"
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 23200: Introduction to Computer Security (Cash, Ur)",
      "courseInstructor": "Cash, Ur",
      "dept": "CMSC",
      "courseType": "Programming Languages & Systems",
      "comments": [
        "(Olivia) It’s kinda ridiculous how much work this class is but you do learn a ton and the projects are super interesting. Do not take this with other hard classes tho or you will hate your life. Professors are good, know a ton about their fields and are engaging",
        "(Eric) Projects are nice, but they assign readings. They also added a midterm and final, which is really annoying. If this class made projects longer and removed readings and exams, it would be perfect."
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 23230: Engineering Interactive Electronics onto Printed Circuit Boards",
      "courseInstructor": "Lopes",
      "dept": "CMSC",
      "courseType": "Elective",
      "comments": [
        "(Olivia) I have Lopes for HCI rn (not this class) and he is a really great and engaging lecturer and makes class interesting. He does do in class activities for HCI so you actually have to show up to every class usually. Also gives a good amount of HW and projects so not a free easy class (at least for HCI idk about this class specifically)"
      ],
      "quarters": ["Unknown"]
    },
    {
      "courseName": "CMSC 23400: Mobile Computing",
      "courseInstructor": "Zheng",
      "dept": "CMSC",
      "courseType": "Programming Languages & Systems",
      "comments": [
        "(Abby) Class work was really chill, two labs and a final project and both labs were super manageable. Pretty reading based class but not super terrible. The research papers and topics that were covered were super interesting if you are into HCI and how phone interfaces work and have evolved! Would recommend but would give enough time to the labs since they seemed a little thrown together, but if you go to maybe one or two office hours for each one you should definitely get an A in the class. The final proj was a research paper so if you are looking for a super coding intensive course, this might not be for you, but it is really interesting and applicable nonetheless",
        "(Chelsea) don’t start the labs late you’ll hate yourself but overall not a bad class. Pretty dependent on what project you decide on lowkey but not bad just manage your time well. It has the topic reviews that you can probably get done in an hour and labs are lengthy but not impossible and you have like two weeks to do them",
        "(Katie 2023) Currently in this class & definitely think it’s a bit more work than previous years. Also, totally did not realize VR Headsets are mobile devices. There are weekly Group Labs (mostly VR, ML, Python based), Topic Reviews (1 page writeup), and pop quizzes in class. For the 2nd half of the quarter, you have a final group project worth ~%40 of your grade. Most of the lectures are Heather going over previous research papers, which is definitely not the most interesting thing, but I found some of the labs to actually be pretty interesting, although more work than expected. For example, we just did a live activity recognition Lab with ML + VR. ",
        "(Ellen 2023) overall p chill class, the labs aren’t toooo bad as long as you start early (we did not and ended up spending 16 hours in Crerar across 2 days for the 2nd lab) but even so I honestly thought the lab was rly cool (+1 to what Katie said - ML + VR. like we built a model that could detect a person’s activity from VR data with 96% accuracy!?!?). Heather is not a really good lecturer though, her classes feel like a waste of time - they’re literally just summaries of papers which u have to read and summarize again to turn in lmao",
        "(Olivia 2023) A decent amount of work (maybe 15 hrs a week) but the assignments are pretty interesting. Work consists of weeklyish labs, weekly paper analyses, and a final project that you work on during the last half of the quarter. There isn’t as much guidance for this class as I’d like but Heather is nice. Start work early. Lecture is pretty boring. Also bulk of the work is done in groups of 3 so have a good group"
      ],
      "quarters": ["Unknown"]
    },
    {
      "courseName": "CMSC 23500: Introduction to Database Systems",
      "courseInstructor": "Castro Fernandez",
      "dept": "CMSC",
      "courseType": "Programming Languages & Systems",
      "comments": [
        "(Abby) Took with aaron, so unsure about CF but yall please avoid this class like the plague if it is taught anything like winter 2022 (got rid of partner coding, changed the language to rust which is good for debugging but super intense to pick up, imo). I had 4 friends that I name off the top of my head that literally 6th and 7th week had to drop other classes to take a three class quarter to finish the work for this class. Aaron was pretty willing to commiserate and hear the students out, but was super obstinate and unwilling to change the coursework that was just way too much since they removed partner coding (they kept the same project that was built upon itself throughout the quarter, but removed partner coding and I was spending like 30 hours a week on this class during a bad week)"
      ],
      "quarters": ["Unknown"]
    },
    {
      "courseName": "CMSC 23710: Scientific Visualization",
      "courseInstructor": "Kindlmann",
      "dept": "CMSC",
      "courseType": "Elective",
      "comments": [
        "(Ellen) A lil disorganized but seems like a nice guy",
        "(Abby) recommend this class if you are looking for an easy A, but I dont feel like I got a ton out of it in terms of coding. I did learn a lot about the history of data visualizations and what makes them good and bad that I can take away and implement in other roles, though! Kindlmann was also super fun to talk to during office hours about the papers that he assigned! Would recommend the class overall, just more reading focused as opposed to coding focused.",
        "(Joshua) This class is so much work; tons of homeworks, projects, mini-projects. It’s a lot but Gordon is very good at teaching so if this is interesting to you I would recommend it! But beware it’s a lot of work"
      ],
      "quarters": ["Unknown"]
    },
    {
      "courseName": "CMSC 25040: Introduction to Computer Vision",
      "courseInstructor": "Maire",
      "dept": "CMSC",
      "courseType": "Elective",
      "comments": [
        "(Joshua) Lectures are very monotone and boring. Homework assignments are also really hard and take a lot of time to complete; however the topics are interesting but be prepared to do a lot of extra work/research on your own outside of the lectures. In fact, I almost never went to lectures. Also, no midterm/final which is really nice"
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 27100: Discrete Mathematics",
      "courseInstructor": "Rand",
      "dept": "CMSC",
      "courseType": "CS Major Requirement",
      "comments": [
        "(James) Rand was really bad. Would not recommend",
        "(Katie) rand is lowk bad, but he was nice & had good notes but wasn’t a great teacher, idk abt simon tho. (Katie 2023) I had Rand for Discrete & his lectures were generally confusing but he had good notes and is nice/reasonable. He would mess up his lectures quite a bit, so the class ended up just being some kid in the first row teaching/correcting the whole lesson lol.",
        "(Max) Rand gave me the worst quarter of my life.",
        "(Vincent) Rand was incompetent",
        "(Olivia) A pretty terrible lecturer but he is at least super nice, if you do end up having him definitely go to his office hours and ask for extra help. Wouldn't recommend tho"
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 27100: Discrete Mathematics",
      "courseInstructor": "Simon",
      "dept": "CMSC",
      "courseType": "CS Major Requirement",
      "comments": [
        "(Laura) Simon taught the other section and I’m pretty sure half the people from his class switched into mine if that tells you anything",
        "(Pratham) simon like janos, right? I took it with potechin last yr but it was basically co-taught with simon. Was quite theoretical with lots of proofs. harder than what my friends who took it last fall w/ fefferman told me they had to do. But still, nothing insane + a lot of your grade is the psets which it's very doable to do well on",
        "(Joshua) Simon was not very good at lecturing. But overall not that bad of a class and he was super accommodating for exams"
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 27200: Theory of Algorithms",
      "courseInstructor": "Drucker",
      "dept": "CMSC",
      "courseType": "CS Major Requirement",
      "comments": [
        "(Don) I thought Drucker was very good no joke. I also had done 140 leetcodes before that class so maybe that helped. It was nice and mathy which depending on what you like could be very good. As in I liked how it was high level and not too in the weeds of coding",
        "(Ellen) oh god not Drucker. he just always spoke in monotone and I s2g over complicated everything like I would google the algo and it would make so much more sense",
        "(Chelsea) I never went to drucker’s class once in person the entire quarter but he still pissed me off",
        "(Minjoo) i always understood more going into drucker’s lecture than i did coming out lmao you’re better off studying off of tim ng’s notes",
        "(Eric) Bad"
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 27230: Honors Theory of Algorithms",
      "courseInstructor": "Potechin",
      "dept": "CMSC",
      "courseType": "Honors CS Major Requirement",
      "comments": [
        "(Abby) did not take this class but was in potechin’s discrete class. Had a pset due every class but they were shorter, manageable, and definitely kept everyone on track. Super easy to get 100s on them, but that was also discrete. Just food for thought… he was a super good lecturer."
      ],
      "quarters": []
    },
    {
      "courseName": "DATA 11900: Introduction to Data Science II",
      "courseInstructor": "Franklin, Nicolae",
      "dept": "DATA",
      "courseType": "Data Science Requirement",
      "comments": [
        "(Emma) Great teachers, great class, 10/10! Fun to work in jupyter notebooks and learn actual skills that you’ll use in jobs / future"
      ],
      "quarters": []
    },
    {
      "courseName": "BUSN 20100: Financial Accounting",
      "courseInstructor": "McClure",
      "dept": "BUSN",
      "courseType": "Business Requirement",
      "comments": [
        "(Emma) Had a different teacher but personally",
        "(Iris) I had Charlie McClure and he is the goat🐐so so good and super nice and reasonable exams"
      ],
      "quarters": []
    },
    {
      "courseName": "BUSN 20500: Operations Management",
      "courseInstructor": "Birge",
      "dept": "BUSN",
      "courseType": "Business Requirement",
      "comments": [
        "(Pratham) Haven’t taken it but have heard from people that it’s a doable class but extremely boring"
      ],
      "quarters": []
    },
    {
      "courseName": "BUSN 20550: Application Development",
      "courseInstructor": "Betina",
      "dept": "BUSN",
      "courseType": "Elective",
      "comments": [
        "(Emma) great class! Pretty easy A while actually learning how to do web development! Your final project is your own web app, teacher and TAs are great, 10/10",
        "(Abby) Betina rocks my socks off. Love him. If you literally just do the (max) 3 hours of homework a week you will literally get a 100. It’s so straight forward, and the TAs were phenomenal as well. Would def def recommend."
      ],
      "quarters": []
    },
    {
      "courseName": "BUSN 20701: Managing in Organizations",
      "courseInstructor": "Todorov",
      "dept": "BUSN",
      "courseType": "Elective",
      "comments": [
        "(Emma) Pretty easy booth class but not too substantial content wise - nice teacher and fun class"
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 27200: Theory of Algorithms",
      "courseInstructor": "Orecchia",
      "dept": "CMSC",
      "courseType": "Theory",
      "comments": [
        "(Katie 2023) Orecchia is a bit unorganized, sometimes it’s hard to read the board but overall nice. We had a really good TA, Jonathan Liu from Berkeley who basically carried the entire class",
        "(David 2023) Orecchia without Jonathan is probably just eh. He’s not a terrible prof but also not one of the best",
        "(Olivia 2023) Jonathan completely carried this class, so not sure how it will go if he’s not there. Orecchia himself was pretty boring but there wasn’t anything terrible about him",
        "(Zelia 2023) I didn’t think Orecchia was a bad lecturer but he wasn’t a great lecturer. Jonathan 10000000000% makes this class though. He was easily the best TA ive ever had (also shout out to Konstantinos he was great too but kinda scary). Jonathan is literally getting his PhD in education in CS so he literally knows exactly how to explain algos + problems to you in the best way ever. In terms of the class, it is hard of course (it’s algos), but specifically this class involves coding, and towards the second half of the course, everyone found themselves spending the most time on coding problems (I personally found this nice because it made things more applicable). Finally- the class is sort of set up in a weird way- you essentially get 2 weeks past the weekly pset deadline for corrections, but once 9th week comes everything obviously is due then. This is great bc lets you continuously correct + refine your psets (guaranteed to do well in homeworks if you want) but also not good if you’re the procrastinator type. Jonathan also grades the class to help you if he sees you’re trying. If he sees you’re doing rly well on Psets he’ll boost the % part of your grade that counts for that etc."
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 23500: Introduction to Databases",
      "courseInstructor": "Rehman",
      "dept": "CMSC",
      "courseType": "Programming Languages & Systems",
      "comments": [
        "(Katie 2022) I took this with Elmore and actually really loved the class and projects! The material isn’t as applicable to what you’d actually do with databases as a backend engineer but it gives you a good fundamental understanding of how databases are built, managed, and function. Personally would recommend everyone take the class & you get to learn Rust!",
        "(Abby 2022) Would second that this class is super interesting but I personally thought the projects and homeworks were incredibly time consuming. I took this Winter 2022 and it was the first quarter they removed partner coding and working in Python. Rust has a little bit of a steep learning curve just in terms of understanding how to utilize it to its fullest, but once you get the hang of it, Rust’s compiler is super helpful when coding. Additionally, I hope they brought back partner coding because I was spending approx 30 hrs a week on that class!",
        "(Pratham 2023) Would highly recommend if you enjoy programming as opposed to overly theoretical stuff, lots of practical stuff in this class. Also recommend because the material itself is pretty important to know career-wise imo (obv depending on what you want to do). Be ready to pick up Rust, and START YOUR ASSIGNMENTS EARLY. That’s the only bad thing about this class – the assignments take a long time (they’re not necessarily hard, just take a while).",
        "(Olivia 2023) One of the best classes in terms of how much you get out of it for the time it requires. Most of the class is a large project with milestones which I found super satisfying. There were also these useful SQL assignments and database design assignments. I had Elmore",
        "(Minjoo 2024) Took with Rehman (he is super approachable and knowledgeable), honestly my favorite class that I’ve taken in the major so far!! Gave me a really good base understanding of databases + projects let you directly apply everything you learn. Has a reputation for being time-consuming but honestly not terrible if you try to start things early; like yes it takes some time but I felt like the time was all spent doing something that actively contributed to my understanding rather than trying to figure out something stupid and useless (cough security). Also really useful for interviews. Participation does count for points so keep that in mind."
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 22200: Computer Architecture",
      "courseInstructor": "Li",
      "dept": "CMSC",
      "courseType": "Programming Languages & Systems",
      "comments": [
        "(Gregorio 2023) Took it with Chong. Assignments were just four projects that build upon each other. They were not bad and kinda interesting. Class was horribly organized tho, TAs were nowhere to be found for most of the course and it took them ages to grade things"
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 22100: Programming Languages",
      "courseInstructor": "Rand",
      "dept": "CMSC",
      "courseType": "Programming Languages & Systems",
      "comments": [
        "(Ryan 2023) Apart from Rand, I think this class is more on the interesting side of CS classes because you learn about what constitutes a programming language such as syntax, grammar, basic logic. Essentially, you learn about the tools you will need if you want to make your own programming language."
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 22500: Type Theory",
      "courseInstructor": "Kurtz",
      "dept": "CMSC",
        "courseType": "Elective",
      "comments": [
        "(Katie 2023) You get to do Racket & Haskell in this class!!!! I personally was not a fan but if you’re interested in Functional Programming, this may be a really interesting class to you. Stu is also just kind of a confusing lecturer--he uses a lot of big/fancy words on his slides but doesn’t really explain them? Homework for the class was due every day, so Monday, Wednesday, + Friday although each assignment wasn’t that large, it gets confusing fast if you don’t understand the fundamentals. THERE ARE NO TESTS THO sooo!",
        "(David 2023) If you’re interested in things like proofs/functional languages/math theory, you’ll probably enjoy this class. Type theory is about formally defining a type system (in like a sets/math sense), and then you can use a programming language to formally prove logical statements (such as x + 1 = 1 + x). Definitely not an applicable class elsewhere but Kurtz is quite knowledgeable and passionate about this subject, although I will agree with Katie—his teaching style is somewhat esoteric. +1 on the no tests, but there are small assignments every mon/wed/fri and a final group project at the end where you explore a proof assistant. Overall, I would only take this class if the stuff I just mentioned sounds interesting to you (otherwise, it’ll just be boring and confusing)."
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 28000: Introduction to Formal Languages",
      "courseInstructor": "Ng",
      "dept": "CMSC",
      "courseType": "Theory",
      "comments": [
        "(Laura 2023) THIS IS AN AMAZING CLASS. Please please consider it. You learn about state machines, Turing machines, the theory of how computers work basically. It’s definitely math heavy, I mean it double counts as a math elective so expect a ton of proofs, no coding. But Ng obviously is amazing and the subject is so interesting",
        "(Ryan 2023) Very interesting class (DFA/NFA machines, Context-free grammar, Turing machine) but as someone who does not have a strong proof background I struggled quite a bit in doing the homeworks"
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 28100: Introduction to Complexity Theory",
      "courseInstructor": "Hoza",
      "dept": "CMSC",
      "courseType": "Theory",
      "comments": [
        "(Minjoo 2024) Like the last unit of algos but more in depth (P vs NP, Turing machines, etc). Topics are genuinely interesting and are useful for shelling out your understanding of how algorithms are actually quantified, but as someone who sucks at proofs / doesn’t have a heavy math background I’m definitely struggling a bit. I think Hoza’s generally pretty good at explaining things and gives good responses to questions (even stupid ones) though. Also his digital footprint is crazy"
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 25300: Mathematical Foundations of Machine Learning",
      "courseInstructor": "Xu",
      "dept": "CMSC",
        "courseType": "Elective",
      "comments": [
        "(David 2023) took this class last quarter with Willett/Jonas—I thought it was a pretty solid intro to ML, made much easier if you have some linear algebra/data analysis experience. Would recommend it if you're considering exploring ML, but fair warning that this is basically a linear algebra class, the amount of coding you do isn’t that much. idk how it’ll be under Haifeng but heard he’s a legend for algos this quarter",
        "(Ryan 2023) I came in knowing absolutely nothing about linear algebra, so I struggled with doing the homeworks/midterm/final. However, so many KTP people were taking it so was able get sufficient help for homeworks at least.",
        "(Pratham 2023) Took this with Willett/Jonas Fall 2022. Having some basic linear algebra background is helpful for this. Would recommend taking math 196 lin alg before this if you can or just learning the basic matrix/vector operations. I liked the class a lot as a whole and learned a ton– def one of my favorite classes I’ve taken. All the material is approachable on the whole. Having some background on the intuition behind many of the models might be helpful.",
        "(Tessie 2023) Took his class last quarter and loved it. I’m in Haifeng’s algos class rn and he is great at explaining concepts so he’ll probably be good for math for ml too."
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 23900: Data Visualization",
      "courseInstructor": "Kindlmann",
      "dept": "CMSC",
        "courseType": "Elective",
      "comments": [
        "(Ellen 2022) A lil disorganized but seems like a nice guy - overall pretty chill homework assignments. He lowkey doesn’t really teach you what you need to know for the assignments",
        "(Abby 2022) Recommend this class if you are looking for an easy A, but I don't feel like I got a ton out of it in terms of coding. I did learn a lot about the history of data visualizations and what makes them good and bad that I can take away and implement in other roles, though! Kindlmann was also super fun to talk to during office hours about the papers that he assigned! Would recommend the class overall, just more reading focused as opposed to coding focused. I am not sure when I wrote this, but I have friends in Scientific Vis rn with him and it is kicking their butt - the course evals for him are also all over the place so I don't even know if this is applicable anymore",
        "(Pratham 2023) I took this Spring 2021, easy A. The prof lowkey checked out completely in the middle of the quarter and went totally MIA (which I heard was typical for him), but I heard he’s gotten on top of that. Kindlmann is very knowledgeable and lectures are interesting but not strictly relevant to the assignments, but the assignments themselves aren’t that hard to just google your way through (something he expects you to do). Interesting and good class if you like to program!",
        "(Aafia 2023) I took this class in Spring, 2023 - The class was pretty chill and interesting, projects were kinda time consuming but not too bad imo. The homeworks and final were pretty chill, and Kindlmann is super nice and accommodating. The grading was super slow so he basically curved everyone’s grades up at the end of the quarter (I think 50% of the class got As). I would recommend this class overall!"
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 22450: Foundations of Programming Languages",
      "courseInstructor": "Reppy",
      "dept": "CMSC",
      "courseType": "Programming Languages & Systems",
      "comments": [
        "(Laura 2022) I’ve heard such terrible things about this professor that I'm actually curious how bad he can be haha"
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 23210: Usable Security and Privacy",
      "courseInstructor": "Chetty",
      "dept": "CMSC",
      "courseType" : "Human Computer Interaction",
      "comments": [
        "Common feedback that Chetty is extremely nice & chill",
        "(Abby 2022) Taking a class with Chetty right now, love her. Super organized and always available to students. I haven't taken Usable Security and Privacy, but a friend of mine in the class told me to take it because it's also super doable"
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 25910: Engineering for Ethics, Privacy, and Fairness in Computer Systems",
      "courseInstructor": "Ur",
      "dept": "CMSC",
        "courseType": "Elective",
      "comments": [
        "(Abby 2023) This class was awesome, but sort of a lot of work. The assignments are pretty straightforward, no exams, and lectures are super interesting. I also feel like the assignments are really self-taught (in a good way!). Everything feels applicable and really allows you to get creative with what you are working on. In general, you can use whichever coding platform you want and whichever language you feel most comfortable with. There is a lot of data cleaning in the beginning, the middle is pretty cool and interactive because you start to analyze your own data (tracking from iPhone or company-collected data), and the end is more privacy-oriented. There is also an assignment where you simulate bitcoin mining which was the only really difficult one, but if you go to office hours, you will be more than okay."
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 13600: Introduction to Data Engineering",
      "courseInstructor": "Krishnan",
      "dept": "CMSC",
        "courseType": "Elective",
      "comments": [
        "(Pratham 2023) Took Data Science for Computer Scientists with him, really loved it. The best CS professor I’ve had at this school, so genuinely invested in your learning, lectures well from first principle",
        "(Chelsea 2023) This is hands down the best class I’ve ever taken at UChicago. Sanjay is SUPER awesome, engaging, available, and just overall really invested in your learning; I had a stressful situation partway through the quarter and he was very accommodating. This is basically an intro to backend software engineering; you build a super cool project involving Python, Django, PostgreSQL, and a little front-end work too so HTML/CSS + JavaScript. You have to be able to pick things up quickly, I think it’s a little too much of a learning curve for someone coming right out of the intro sequence (who this class is supposedly intended for) but after a few CS classes it's an easy A and the class is pretty accessible in any case, I really think he positions you to do well in it as long as you put some work in. The stuff I learned here I was able to directly apply to my internship. Sucks that it can’t count as an elective but I’d take it again if I could, it was so fun & now I’m trying to take other classes with him :)"
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 11900: Introduction to Data Science II",
      "courseInstructor": "Trimble",
      "dept": "CMSC",
        "courseType": "DS Major Requirement",
      "comments": [
        "(Jessica 2022) Please do not take any class this man teaches unless it is DATA 227. I took him for 118 not 119 but he’s not a good lecturer at all, super knowledgeable, but can’t teach :(",
        "(Aafia 2023) I took this with Franklin and Nicolae and my friend took it with Trimble, would def recommend taking this class with Franklin and Nicolae, but if they’re teaching in the same quarter all the material and assignments are the same so you could just prereg for Trimble but attend Franklin and Nicolae’s lectures"
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 11900: Introduction to Data Science II",
      "courseInstructor": "Nussbaum",
      "dept": "CMSC",
      "courseType": "DS Major Requirement",
      "comments": [
        "(Jessica 2022) Amy is the goat. Great professor and really accommodating with deadlines"
      ],
      "quarters": []
    },
    {
      "courseName": "DATA 12000: Computer Science for Data Science",
      "courseInstructor": "Nussbaum",
      "dept": "DATA",
      "courseType": "DS Major Requirement",
      "comments": [
        "(Jessica 2022) Wachs is a boring lecturer and used a whiteboard for this whole class, but it should be super easy especially if you’ve taken the CS intro sequence."
      ],
      "quarters": []
    },
    {
      "courseName": "DATA 21200: Mathematical Methods for Data Science II",
      "courseInstructor": "Biron",
      "dept": "DATA",
      "courseType": "DS Major Requirement",
      "comments": [
        "(Alexa 2023) I actually loved this class. Biron is my favorite professor for anything data science. Super organized, great lecture notes. He made this class super easy."
      ],
      "quarters": []
    },
    {
      "courseName": "ECON 10200: Principles of Macroeconomics (Kuevibulvanich)",
      "courseInstructor": "Kuevibulvanich",
      "dept": "ECON",
      "courseType": "Core Requirement",
      "comments": [
        "(Mahum 2023) Ken is a funny lecturer but grading distribution is terrible. He assigns psets every week to enforce learning which is p helpful in my opinion but made the midterm and final much harder than the practice exams. Would probs take Sanderson instead",
        "(Amulya 2023) Agree with Mahum. Great lecturer (definitely learn more than you do with Sanderson), but you will have to put in the work for an A. He’s super available during office hours and is always helpful with any questions. If you want an easier class, take with Sanderson."
      ],
      "quarters": []
    },
    {
      "courseName": "ECON 10700: Introductory Game Theory",
      "courseInstructor": "Fang",
      "dept": "ECON",
      "courseType": "Elective",
      "comments": [
        "(Iris 2024) I took Game Theory during a September session so it was squeezed into 3 weeks, but it’s actually pretty interesting and Fang is a good lecturer who provides slides & notes, and stops for questions often. His exams are totally fine if you understand the PSETs, which are totally fine if you understand the lectures, but don’t be ~tricked~ by them bc in our midterm he made all 10 of the T/F answers True lolol. Pretty sure he reuses PSET questions too so you def can sauce the solutions from me if needed."
      ],
      "quarters": []
    },
    {
      "courseName": "STAT 25100: Introduction to Mathematical Probability",
      "courseInstructor": "Wang",
      "dept": "STAT",
      "courseType": "Core Requirement",
      "comments": [
        "(Matthew 2023) Not a great prof, pretty disorganized and doesn’t teach very well - spends a lot of time going over how theorems are derived rather than how to use them, so there’s quite a disconnect between lectures and psets and exams - however, lecture slides are provided and the average is curved to a B+.",
        "(Arya) Took with the same prof and can confirm that he was not good, but he left UChicago. The class itself is probably the most useful class I’ve taken at UChicago, especially for quant interview prep if that’s applicable to you. Would recommend taking this class in the spring and then stat 244/245 the following school year. Make sure to take this class before 244 though because half of 244 covers all of 251."
      ],
      "quarters": []
    },
    {
      "courseName": "MATH 18300: Math for Physical Sciences I",
      "courseInstructor": "Min Ju Lee",
      "dept": "MATH",
      "courseType": "Core Requirement",
      "comments": [
        "(Arya 2022) Not a bad prof. Is a very standard class with lectures, 1 midterm, and 1 final. The content is basically BC Calculus (Taylor series) and Linear Algebra (diagonalization, rref, eigenvalues/vectors). The connection between the two was not made apparent by the class, but the content felt very fair and reasonable. He was a bit annoying about grading when I took it because it was his first quarter at UChicago, but I’m sure he’s gotten better with it."
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 14300: Systems Programming I",
      "courseInstructor": "Junchen Jiang",
      "dept": "CMSC",
      "courseType": "CS Major Requirement",
      "comments": [
        "(Katie) I actually really liked Junchen. I thought he was an organized and fair lecturer & professor and would recommend!",
        "(David) I thought Junchen was pretty hands-off with the class–he just lectured and not much else. idk if that’s a good or bad thing"
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 27530: Honors Graph Theory",
      "courseInstructor": "Babai",
      "dept": "CMSC",
        "courseType": "Theory",
      "comments": [
        "(Laura) lol Babai. Take this class if you like torturous amounts of work, but also Babai is a literal legend and he’s retiring after this quarter so it’s his last class."
      ],
      "quarters": []
    },
    {
      "courseName": "CMSC 22900: Quantum Computer Systems",
      "courseInstructor": "Chong",
      "dept": "CMSC",
        "courseType": "Elective",
      "comments": [
        "(David) Had Chong for architecture last quarter—he’s a good lecturer but completely absent outside the lectures. Few Ed responses, labs were buggy, and no practice problems for the tests or anything. This is pretty class-specific though, so I’d read the course feedback on this class to see if it’s similar."
      ],
      "quarters": []
    },
    {
      "courseName": "DATA 21200: Mathematical Methods for Data Science II",
      "courseInstructor": "Biron",
      "dept": "DATA",
        "courseType": "DS Major Requirement",
      "comments": [
        "(Alexa) I actually loved this class. Biron is my favorite professor for anything data science. Super organized, great lecture notes. He made this class super easy."
      ],
      "quarters": []
    },
    {
      "courseName": "STAT 25100: Introduction to Mathematical Probability",
      "courseInstructor": "Wang",
      "dept": "STAT",
        "courseType": "Core Requirement",
      "comments": [
        "(Matthew) Not a great prof, pretty disorganized and doesn’t teach very well - spends a lot of time going over how theorems are derived rather than how to use them, so there’s quite a disconnect between lectures and psets and exams - however, lecture slides are provided and the average is curved to a B+."
      ],
      "quarters": []
    }
  ]