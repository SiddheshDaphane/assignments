
const clock = () => {
  const now = new Date();

  // 24-hour format
  const hr24 = now.getHours().toString().padStart(2, '0');
  // console.log(hr24);
  const min24 = now.getMinutes().toString().padStart(2, '0');
  // console.log(min24);
  const sec24 = now.getSeconds().toString().padStart(2, '0');
  // console.log(sec24);

  // 12-hour format
  const hours12 = ((now.getHours() + 11) % 12 + 1).toString().padStart(2, '0');
  const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

  const form24 = (`24-hour format: ${hr24}:${min24}:${sec24}`);
  console.log(form24);
  console.log(`12-hour format: ${hours12}:${min24}:${sec24} ${ampm}`);
}
setInterval(clock,1000);
clock();