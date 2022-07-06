# Command Definitions

---

**This directory contains typescript modules which contain propreties for slash commands. This document explains what these propreties do and what types are acceptable for each proprety**

- **name** - this is the name of the command in the commands list
- **description** - this is the description of the command in the commands list
- **options** - this is where you provide an array of objects contianing the data required to register an object with the Discord API 
- **procedure** - this is where you provide a name of a moudle in the `./src/procedures` directory containing a "run" function. This function will be called by the command handler at `./src/components/commands.ts` 