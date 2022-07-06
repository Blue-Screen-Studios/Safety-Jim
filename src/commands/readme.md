# Command Definitions

---

**This directory contains typescript modules which contain propreties for slash commands. This document explains what these propreties do and what types are acceptable for each proprety**

- `name`: this is the name of the command in the commands list
- `description`: this is the description of the command in the commands list
- `procedure`: Here you can provide a name of a moudle containing a "run" function to run this command, this module must be in the `./src/procedures` directory. If you do not want to run a procedure for this command you may leave the procedure proprety as `null`.