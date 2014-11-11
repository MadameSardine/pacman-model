# PACMAN in Nodejs

## Models

### Pacman
---------
* has coordinates on a grid
* can travel along corridors (not through walls)
* has 3 lives at start
* can eat white dots
* takes 1 space on the grid
* wins when all white dots are eaten
* loses a life when is touched by a ghost

### Ghost
---------
* has coordinates on a grid
* can travel along corridors (not through walls)
* can kill Pacman
* takes 1 space on the grid
* can not eat dots

### Grid
--------
* contains cells

### Cells
---------
* can be empty
* can have a dot
* can have a pacman
* can have a wall
* can have a ghost

### Dot
--------
* is not eaten at start
* can be eaten

### Wall
--------
* takes 1 space on the grid

### Empty space
--------------
* takes 1 space on the grid
