class Rogue:

    # class attribute
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

    def __init__(self, name=name, race=race, weapons=weapons, stats=stats, job=job):
        self.name = name
        self.race = race
        self.weapons = weapons
        self.stats = stats
        self.job = job

    def backstab(self, enemy_hp):
        for weapon in self.weapons:
            if 'dagger' in weapon:
                return enemy_hp - weapon['dagger']['damage']
            return self.stats['hp'] - enemy_hp


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