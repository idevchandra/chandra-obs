---
title: Debug Remote Heroku Node Server with Visual Code
date: 2022-01-04 11:58:47 +00:00
tags: [tech]
---
![[vnd.png]]

- SSH into **Heroku server** from your local machine.


	```shell
	heroku ps:exec -a <APP>
	```

- On the **heroku server**, find the `node` process ID (PID) by running `ps aux` or `ps aux | grep -i node` command. In the below sample output, the `PID` is `46`.


	```shell
	~ $ ps aux
	USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
	user        46  0.0  0.0 767320 58160 ?        Sl   21:35   0:00 node ./bin/www
	```

- On the **heroku server**, run the below command to send `SIGUSR1` signal to the node process to enable its debugger. Check [documentation here](https://nodejs.org/en/docs/guides/debugging-getting-started/).

	```shell
	kill -usr1 <PID>
	```

- On your **local machine**, run the port forward command. (Note: Before running the below command, running `lsof -i:9229` should not return any PID. This is to make sure the port is vailable on your local machine.)

	```shell
	heroku ps:forward 9229 -a <APP>
	```

- On your **local Machine** VS Code, add this configuration.

	```shell
	{
		"type": "node",
		"request": "attach",
		"name": "Remote Heroku: Debug Remote Server",
		"address": "localhost",
		"port": 9229,
		"protocol": "inspector",
		"localRoot": "${workspaceFolder}",
		"remoteRoot": "/app"
	}
	```

![[vsconfig.png]]
- On your **local machine**, by running the debug configuration, you would be able to attach to the remote process via `9229` port.

![[playdebug.png]]
- You can set breakpoints and be able to debug remote heroku node process.
