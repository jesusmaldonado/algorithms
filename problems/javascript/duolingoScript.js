var arr = Array.from(document.querySelectorAll('.MrbBK'))
arr = arr.filter(a => !a.classList.contains('ewiWc'));
var allSections = Array.from(document.querySelectorAll('.Xpzj7'))
var titles = arr.map(node => {
  let title = node.parentElement.parentElement.parentElement.parentElement.innerText;
  const section = node.closest('.Xpzj7');
  const level = allSections.indexOf(section) + 1;
  title = title[0].match(/[0-9]/) ? title.slice(1).concat('(Unlocked)').trim() : title;
  return { level, title }
});
var levelSeen = new Set();
var string = '';
for (let {level, title} of titles) {
  if (!levelSeen.has(level)){
    string = string.concat("\n\nLevel:"+ level + '\n');
    levelSeen.add(level);
  }
  string = string.concat('\n' + title);
}
