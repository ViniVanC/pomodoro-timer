import { Center, Text } from "native-base";
import React from "react";
import { TextAnimation } from "./TypingAnimation";

export const Bg = () => {
  return (
    <Center
      position={"absolute"}
      top={50}
      left={0}
      w={"100wv"}
      h={"100wh"}
      zIndex={0}
      p={"10px"}
    >
      <TextAnimation fz={12} delay={1}>
        {`
▲ (ViniPC) pomodoro-timer [main] neofetch
            .-/+oossssoo+/-.               vini@ViniPC
        \`:+ssssssssssssssssss+:\`           -----------
      -+ssssssssssssssssssyyssss+-         OS: Ubuntu 22.04.3 LTS on Windows 10 x86_64
    .ossssssssssssssssssdMMMNysssso.       Kernel: 5.15.133.1-microsoft-standard-WSL2
   /ssssssssssshdmmNNmmyNMMMMhssssss/      Uptime: 1 day, 9 hours, 28 mins
  +ssssssssshmydMMMMMMMNddddyssssssss+     Packages: 653 (dpkg), 9 (snap)
 /sssssssshNMMMyhhyyyyhmNMMMNhssssssss/    Shell: zsh 5.8.1
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   Theme: Adwaita [GTK3]
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   Icons: Adwaita [GTK3]
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   Terminal: Windows Terminal
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   CPU: AMD PRO A12-9800B R7 4C+8G (4) @ 2.694GHz
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   GPU: dbba:00:00.0 Microsoft Corporation Device 008e
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   Memory: 314MiB / 3374MiB
 /sssssssshNMMMyhhyyyyhdNMMMNhssssssss/
  +sssssssssdmydMMMMMMMMddddyssssssss+
   /ssssssssssshdmNNNNmyNMMMMhssssss/
    .ossssssssssssssssssdMMMNysssso.
      -+sssssssssssssssssyyyssss+-
        \`:+ssssssssssssssssss+:\`
            .-/+oossssoo+/-.
▲ (ViniPC) ~ my\ fiels/reactNative/pomodoro-timer
▲ (ViniPC) pomodoro-timer [main] l
total 424K
drwxr-xr-x   7 vini vini 4.0K Jan  6 11:01 .
drwxr-xr-x   6 vini vini 4.0K Jan  6 10:33 ..
drwxr-xr-x   2 vini vini 4.0K Jan  6 10:26 .expo
drwxr-xr-x   8 vini vini 4.0K Jan  6 20:36 .git
-rw-r--r--   1 vini vini  375 Oct 26  1985 .gitignore
-rw-r--r--   1 vini vini  514 Jan  6 14:13 App.js
-rw-r--r--   1 vini vini  624 Jan  6 12:49 app.json
drwxr-xr-x   2 vini vini 4.0K Jan  6 12:49 assets
-rw-r--r--   1 vini vini  107 Oct 26  1985 babel.config.js
drwxr-xr-x   2 vini vini 4.0K Jan  6 20:21 components
drwxr-xr-x 602 vini vini  20K Jan  6 15:23 node_modules
-rw-r--r--   1 vini vini  660 Jan  6 15:23 package.json
-rw-r--r--   1 vini vini 358K Jan  6 15:23 yarn.lock
▲ (ViniPC) pomodoro-timer [main] gst
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   App.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        components/Bg.js

no changes added to commit (use "git add" and/or "git commit -a")
`}
      </TextAnimation>
    </Center>
  );
};
