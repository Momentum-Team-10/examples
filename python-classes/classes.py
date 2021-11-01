class Rogue:

    # Below are class attributes. These attributes
    # will become default attributes in the case where
    # we do not pass our instance(s) of Rogue() specific information
    name = 'anon'
    race = 'human'
    job = 'rogue'
    weapons = [
        {
            "dagger": {
                "damage": 16,
                "thrown": True,
            }
        },
        {
            "crossbow": {
                "damage": 25,
                "thrown": False,
            }
        }
    ]

    stats = {
        'hp': 20,
        'dexterity': 5,
        'strength': 10,
        'intelligence': 20
    }

    # This is the constructor method. It runs anytime an instace of this class is created. This is where we can provide information about the instace(s) we create
    def __init__(self, name=name, race=race, weapons=weapons, stats=stats, job=job):
        # we have to use the keyword 'self' so that our class 
        # has a refernce about the information it holds. This is needed anytime we need to change something about or class or have our class perform a task
        self.name = name
        self.race = race
        self.weapons = weapons
        self.stats = stats
        self.job = job

    # this is a class method. It will allow instances of
    # the Rogue class perform a task
    def backstab(self, enemy_hp):
        for weapon in self.weapons:
            if 'dagger' in weapon:
                return enemy_hp - weapon['dagger']['damage']
            return self.stats['hp'] - enemy_hp

# let's create an instance of the Rogue() class!
# We are saving an instance of our Rogue class to the variable
# called 'player_1'. One the class instance is created,  
# the value 'player_1' is now a big object
player_1 = Rogue('Pilar', 'Human')

#  this is the structure player_1 after the Rogue class
# is instanciated 
# player_1 = {
#     'name': 'Pilar',
#     'race:': 'Human',
#     'weapons': [
#         {
#             "dagger": {
#                 "damage": 16,
#                 "thrown": True,
#             }
#         },
#         {
#             "crossbow": {
#                 "damage": 25,
#                 "thrown": False,
#             }
#         }
#     ],
#     'stats': {
#         'hp': 20,
#         'dexterity': 5,
#         'strength': 10,
#         'intelligence': 20
#     },
#     'backstab': Rogue.backstab
# }

class Goblin():
    
    race = 'goblin'
    name = 'anon'
    stats = {
		'hp': 7,
		'strength': 5
	}

    def __init__(self, name=name, race=race, stats=stats):
        self.name = name
        self.race = race
        self.stats = stats

    def nimble_escape(self, player):
        if player.stats['strength'] > self.stats['strength']:
            return False
        return True
    
    def become_rogue(self):
        pass