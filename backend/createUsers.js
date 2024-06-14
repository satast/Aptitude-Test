const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const createUser = async (username, password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  console.log(`User ${username} created`);
};

const createUsers = async () => {
  await createUser('pandikumar652001@gmail.com', '06052001');
  await createUser('yogaravi666@gmail.com', '04042002');
  await createUser('rajendranmarish@gmail.com', '10072002');
  await createUser('kesavansai1019@gmail.com', '10072002');
  await createUser('nandhustark3000@gmail.com', '22082002');
  await createUser('murukaanand791@gmail.com', '01082002');
  await createUser('rsmani639@gmail.com', '30122002');
  await createUser('praveenmani246@gmail.com', '18112001');
  await createUser('nithyasanthanambca@gmail.com', '11102001');
  await createUser('sindhut1602@gmail.com', '11072002')
  await createUser('candidate1', 'password1');

  // Add more users as needed
  mongoose.disconnect();
};

createUsers().catch(err => console.error(err));
