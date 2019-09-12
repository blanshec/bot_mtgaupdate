# Update Scryer: Telegram bot for checking Magic: The Gathering Arena .msi updates

This bot was created to notify users about new updates to the .msi file of the Magic: The Gathering Arena.

The need for such an update checker is for those who play the game on MAC OS and use .msi file to manually update the game.

## Development log

[12.09.2019] Created getUpdate function that gets header of the forum post that contains information of the date when the fiel was updated. It is possible to print the date to the console, but bot gets info too early returning a Promise. Must be fixed.
