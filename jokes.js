module.exports = type => {
  const jokes = {
    fun: [
      "Can a kangaroo jump higher than a house? Of course, a house doesn’t jump at all.",
      "In a boomerang shop: I'd like to buy a new boomerang please. Also, can you tell me how to throw the old one away?",
      "What goes up and down but never moves? The stairs!"
    ],
    "super-fun": [
      "Of course I should clean my windows. But privacy is important too.",
      "Two police officers crash their car into a tree. After a moment of silence, one of them says, “Wow, that’s got to be the fastest we ever got to the accident site.",
      "I got a really cute dog and called him Threemiles. It sounds great to say I walk Threemiles twice a day."
    ],
    bad: [
      "What’s black, red, black, red, black, red? A zebra with a sun burn",
      "It has four legs and it can fly, what is it? Two birds.",
      "What is blue and smells like red paint? Blue paint"
    ]
  };
  const randomNumber = Math.floor(Math.random() * 3);
  return jokes[type][randomNumber];
};
