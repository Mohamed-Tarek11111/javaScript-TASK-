//--------- قاعد البيانات-------------
let  protagonist ={
    name:"Lily",
    possessivePronoun: "her",
    subjectpRonoun:"she",
    objectpRonoun:"her",
}
let pet ={
    type:"dog",
    name:"Buddy",
}
let antagonist={
    name:"Ethan",
    subjectpRonoun:"he",
    objectpRonoun:"him",
    gender:"she",
}
// --------القصة الأولى---------
const First_story= ` ${protagonist.name} and ${protagonist.possessivePronoun}${pet.type} , ${pet.name} 
 loved going to the local ${pet.type} park. It was a great place for ${pet.name}
 to run around and play with other ${pet.type}s. However,${protagonist.name} noticed that there was one kid, ${antagonist.name}
 who liked to bully the younger kids and their ${pet.type}s. One day,${protagonist.name} saw ${antagonist.name}
 picking on a smaller child and his ${pet.type}. ${protagonist.name} couldn't stand by and watch, so ${protagonist.subjectpRonoun}
stepped in and told ${antagonist.name} to leave the child alone. ${antagonist.name} was surprised by ${protagonist.name}
s bravery, and ${protagonist.possessivePronoun} backed down.${protagonist.name} continued to stand up to ${antagonist.name}
 whenever ${antagonist.subjectpRonoun} saw ${antagonist.objectpRonoun} bullying someone else. ${protagonist.subjectpRonoun}
 also started a club at the ${pet.type} park for younger kids and their ${pet.type}s. The club was a hit, and it helped to make the ${pet.type}
 park a safer and more enjoyable place for everyone.`;
// ------------القصة الثانية----------
const second_story=`${protagonist.name} loved going to the local community center. It was a great place to meet new people and participate in fun activities. However, ${protagonist.subjectpRonoun}
 noticed that there was one ${antagonist.gender}, ${antagonist.name}, who always seemed to be complaining about something.One day, ${protagonist.name}
 saw ${antagonist.name} complaining to the community center director about the new exercise class that was being offered.${protagonist.name}
 felt bad for the director, so ${protagonist.subjectpRonoun} stepped in and told ${antagonist.name} that ${protagonist.subjectpRonoun} enjoyed the class. ${antagonist.name}
 was surprised by ${protagonist.name}'s positivity, and ${antagonist.subjectpRonoun} backed down.${protagonist.name} continued to stand up to ${antagonist.name} whenever ${protagonist.subjectpRonoun}
 saw ${antagonist.objectpRonoun} complaining about something. ${antagonist.subjectpRonoun} also started a new program at the community center called Coffee and Conversation. The program was a 
 great way for people of all ages to come together and get to know each other.`
;
// -----------القصة الثالثة------------
const third_story=`${protagonist.name} loved working at the local veterinary clinic.${protagonist.subjectpRonoun} loved helping animals and making them feel better. However,${protagonist.subjectpRonoun}
 didn't like working for Dr. ${antagonist.name}. Dr. ${antagonist.name} was rude and arrogant to ${protagonist.possessivePronoun} staff and to the animals.One day, ${protagonist.name}
 saw Dr. ${antagonist.name} yelling at a scared ${pet.type}. ${protagonist.name} couldn't stand by and watch, so ${protagonist.subjectpRonoun} stepped in and told Dr. ${antagonist.name}
to be nicer to the ${pet.type}. Dr. ${antagonist.name} was furious with ${protagonist.name}, and ${antagonist.subjectpRonoun} threatened to fire ${protagonist.objectpRonoun}.${protagonist.name}
 knew that ${protagonist.subjectpRonoun} couldn't continue working for Dr. ${antagonist.name}. ${protagonist.subjectpRonoun} quit ${protagonist.possessivePronoun} job and started working at a different veterinary clinic. ${protagonist.name}
 is now happy at  ${protagonist.possessivePronoun}  new job, and ${protagonist.subjectpRonoun} is working hard to achieve ${protagonist.possessivePronoun}
 goal of becoming a veterinarian.`;
// -------------- اختيار القصة-----------
let STORY=[First_story,second_story,third_story];
console.log(STORY[Math.trunc(Math.random()*STORY.length)]);


