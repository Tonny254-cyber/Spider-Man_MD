const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0E4SjEzR2pZVU5CNnMyUm9WeHliOGhsTlgyZGJBMzl3ZDRCZkhIM0RWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmdYZnk1RW9MMnVGTHI0NkZpc21PWGo3d0I5d1VNd3l4NnEzZjlyVHRnbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3T3h1UnNhT1dKNmdqYnRHZUEwcDAydWF5MlFQSjNLdmRZUmF1c1ZkRFVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNYlE4QXJBcitNT0h6NG9Ld0xjQXhNcU1MZklXeWZHYnNxcmp4WGl5cFJnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9GRUJURWh0R2d5K2IzTW9GaXJtSHJodkcvSllLdGswalUrVDdEbFJ2Rzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlUzMm5rL095Q3Y5cElBV29pbGFlR25qdERRclgwdjlXcWZsMS8yRmFaVkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0g5S3VXY0ZsNTJEbndIdi9mQlNaSFo3QkordnAxSHZLSHI3VWtSbGNIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkNQcFE4S1BJQTFBRHhFalErdHZOQUQrakp3aFBuQUI3Zk9HcHAzQ1FFYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjYzS2JaRk10amVDM3hZc3J6V3NiVFV6bjQwRU9mdEdpT0Z0M0pEY21SZ2o3cmROU1FyamtBWlQxUVpxV1ZwQmpuZGhKMjVwQUUxTStpRU5FYXo5b0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiJvSkd6czVsbGVsNE9Fa25wYnN6NTFjSG5COGtmWDc1QitFeEpFMlRtdjhnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5ZFZHUklkN1RvMnI0cWxKaV82cEhRIiwicGhvbmVJZCI6IjliOWU5ZjZkLTMxMjQtNGJiMC05NDA1LWZkNGIwZDJjNzlkYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsRGxBeTJhU3lQTGxIaGVqN2dYSWV4ZGpnNDg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0FhN1pqeHNhTmtxeDRud1pGVi8xOW9LR0ZvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjEzVlQ2RFRTIiwibWUiOnsiaWQiOiIyNTQ3ODk3ODkyMzU6N0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSVA5bi8wQ0VNUzQ2N29HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWGUvU2ZYb0NCcVhqaUMxMG45YVY3NTVEWU1IVTBqTXNZZ2pPQWdqOERRST0iLCJhY2NvdW50U2lnbmF0dXJlIjoieXlEUlBJZG93THZPY1Q5dS9oM2ZSdHViUzhnR3VIVzVuWWQ5ZVc5c212K2Z5M2k0WkZ6ZlRUUThkYzRmcy8vd0VvbGhoaCtQY0p3TzYzcDVTeFp4Q1E9PSIsImRldmljZVNpZ25hdHVyZSI6IldXalVteTNXVW9Fcm9VVEpkSHd2eHI1VUNrcHdxVyszbjZlcEpPSXZpYVMxNGNCcTdGTGRVRVYyaFpSNlQwTmVEZlJ4L3ZHTXNSQ0s1MzJ6ZjgxdEJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0Nzg5Nzg5MjM1OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVjN2MG4xNkFnYWw0NGd0ZEovV2xlK2VRMkRCMU5JekxHSUl6Z0lJL0EwQyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDAwNzg4OX0=", //paste your session_id
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", 
MODE: process.env.MODE || "private",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
AUTO_REACT: process.env.AUTO_REACT || "false",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",    
};
