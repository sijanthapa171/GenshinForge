import { Badge } from '@/components/ui/badge'
import {
    Bonus,
    Character,
    DamageType,
    FormulaOutputType,
    FormulaType,
    TalentScaling,
} from '@/interfaces/Character'
import { getTalentScalingValue } from '@/lib'

const talentScalings: TalentScaling = {
    "Normal Attack: Soloist's Solicitation": {
        '1-Hit DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: [
                'Normal Attack Additive Bonus',
                'C6 Pneuma DMG Bonus',
            ],
            multiplicativeBonusStat: [
                'Physical DMG Bonus',
                'Normal Attack DMG Bonus',
            ],
            damageType: DamageType.Physical,
        },
        '2-Hit DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: [
                'Normal Attack Additive Bonus',
                'C6 Pneuma DMG Bonus',
            ],
            multiplicativeBonusStat: [
                'Physical DMG Bonus',
                'Normal Attack DMG Bonus',
            ],
            damageType: DamageType.Physical,
        },
        '3-Hit DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: [
                'Normal Attack Additive Bonus',
                'C6 Pneuma DMG Bonus',
            ],
            multiplicativeBonusStat: [
                'Physical DMG Bonus',
                'Normal Attack DMG Bonus',
            ],
            damageType: DamageType.Physical,
        },
        '4-Hit DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: [
                'Normal Attack Additive Bonus',
                'C6 Pneuma DMG Bonus',
            ],
            multiplicativeBonusStat: [
                'Physical DMG Bonus',
                'Normal Attack DMG Bonus',
            ],
            damageType: DamageType.Physical,
        },
        'Charged Attack DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: [
                'Charged Attack Additive Bonus',
                'C6 Pneuma DMG Bonus',
            ],
            multiplicativeBonusStat: [
                'Physical DMG Bonus',
                'Charged Attack Attack DMG Bonus',
            ],
            damageType: DamageType.Physical,
        },
        'Charged Attack Stamina Cost': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            multiplicativeBonusStat: ['Charged Attack Stamina Cost Multiplier'],
            outputType: FormulaOutputType.Generic,
        },
        'Plunge DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Plunging Attack Additive Bonus'],
            multiplicativeBonusStat: [
                'Physical DMG Bonus',
                'Plunging Attack DMG Bonus',
            ],
            damageType: DamageType.Physical,
        },
        'Low Plunge DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: [
                'Plunging Attack Additive Bonus',
                'C6 Pneuma DMG Bonus',
            ],
            multiplicativeBonusStat: [
                'Physical DMG Bonus',
                'Plunging Attack DMG Bonus',
            ],
            damageType: DamageType.Physical,
        },
        'High Plunge DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: [
                'Plunging Attack Additive Bonus',
                'C6 Pneuma DMG Bonus',
            ],
            multiplicativeBonusStat: [
                'Physical DMG Bonus',
                'Plunging Attack DMG Bonus',
            ],
            damageType: DamageType.Physical,
        },
        'Spiritbreath Thorn/Surging Blade DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['ATK'],
            additiveBonusStat: ['Normal Attack Additive Bonus'],
            multiplicativeBonusStat: ['Hydro DMG Bonus', 'Normal Attack DMG Bonus'],
            damageType: DamageType.Hydro,
        },
        'Spiritbreath Thorn/Surging Blade DMG Interval': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Time,
        },
        'C6 Ousia Per-Hit Healing': {
            formulaType: FormulaType.GenericFormulaWithScaling,
            attribute: ['HP'],
            additiveBonusStat: ['Healing Bonus'],
            outputType: FormulaOutputType.Healing,
            minConstellation: 6,
        },
        'C6 Pneuma Per-Hit HP Consumption': {
            formulaType: FormulaType.GenericFormulaWithScaling,
            attribute: ['HP'],
            outputType: FormulaOutputType.Drain,
            minConstellation: 6,
        },
    },
    'Salon Solitaire': {
        'Ousia Bubble DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['HP'],
            additiveBonusStat: ['Elemental Skill Additive Bonus'],
            multiplicativeBonusStat: [
                'Hydro DMG Bonus',
                'Elemental Skill DMG Bonus',
            ],
            damageType: DamageType.Hydro,
        },
        Duration: {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Time,
        },
        'Gentilhomme Usher DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['HP'],
            additiveBonusStat: ['Elemental Skill Additive Bonus'],
            multiplicativeBonusStat: [
                'Hydro DMG Bonus',
                'Elemental Skill DMG Bonus',
                'Salon Members DMG Bonus',
            ],
            damageType: DamageType.Hydro,
        },
        'Surintendante Chevalmarin DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['HP'],
            additiveBonusStat: ['Elemental Skill Additive Bonus'],
            multiplicativeBonusStat: [
                'Hydro DMG Bonus',
                'Elemental Skill DMG Bonus',
                'Salon Members DMG Bonus',
            ],
            damageType: DamageType.Hydro,
        },
        'Mademoiselle Crabaletta DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['HP'],
            additiveBonusStat: ['Elemental Skill Additive Bonus'],
            multiplicativeBonusStat: [
                'Hydro DMG Bonus',
                'Elemental Skill DMG Bonus',
                'Salon Members DMG Bonus',
            ],
            damageType: DamageType.Hydro,
        },
        'Gentilhomme Usher HP Consumption': {
            formulaType: FormulaType.GenericFormulaWithScaling,
            attribute: ['HP'],
            outputType: FormulaOutputType.Drain,
        },
        'Surintendante Chevalmarin HP Consumption': {
            formulaType: FormulaType.GenericFormulaWithScaling,
            attribute: ['HP'],
            outputType: FormulaOutputType.Drain,
        },
        'Mademoiselle Crabaletta HP Consumption': {
            formulaType: FormulaType.GenericFormulaWithScaling,
            attribute: ['HP'],
            outputType: FormulaOutputType.Drain,
        },
        'Singer of Many Waters Healing': {
            formulaType: FormulaType.GenericFormulaWithScaling,
            attribute: ['HP', 'HP'],
            additiveBonusStat: ['Healing Bonus'],
            outputType: FormulaOutputType.Healing,
        },
        CD: {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Time,
        },
    },
    'Let the People Rejoice': {
        'Skill DMG': {
            formulaType: FormulaType.DamageFormula,
            attribute: ['HP'],
            additiveBonusStat: ['Elemental Burst Additive Bonus'],
            multiplicativeBonusStat: [
                'Hydro DMG Bonus',
                'Elemental Burst DMG Bonus',
            ],
            damageType: DamageType.Hydro,
        },
        Duration: {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Time,
        },
        'Maximum Fanfare': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            additiveBonusStat: ['Fanfare Maximum Stacks'],
            outputType: FormulaOutputType.Generic,
        },
        'Fanfare to DMG Increase Conversion Ratio': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Percentage,
        },
        'Fanfare to Incoming Healing Bonus Conversion Ratio': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Percentage,
        },
        CD: {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Time,
        },
        'Energy Cost': {
            formulaType: FormulaType.GenericFormulaWithoutScaling,
            outputType: FormulaOutputType.Generic,
        },
    },
}

const characterBonuses: Bonus[] = [
    {
        name: 'Salon Solitaire',
        description: (
            <span>
                <Badge variant="secondary">E</Badge> The number of party members with
                more than 50% HP nearby (1/2/3/4 or more) increases the Salon
                Members&apos; DMG by 10%/20%/30%/40%
            </span>
        ),
        icon: '/images/characters/furina-skill.png',
        effect: (attributes, talentLevels, currentStacks) => {
            if (!currentStacks) return { attributes }
            const newAttributes = {
                ...attributes,
                'Salon Members DMG Bonus':
                    (attributes['Salon Members DMG Bonus'] || 0) +
                    currentStacks * 0.1,
            }
            return { attributes: newAttributes }
        },
        maxStacks: 4,
        stackOptions: [
            'Off',
            '1 Member',
            '2 Members',
            '3 Members',
            '4 Members (Trial-only)',
        ],
        priority: 1,
    },
    {
        name: 'Let the People Rejoice',
        description: (
            <span>
                <Badge variant="secondary">Q</Badge> Furina gains a Fanfare stack
                whenever a party member loses/gains 1% of their maximum HP. DMG dealt
                and Incoming Healing Bonus are increased per stack (with a maximum of
                300, see{' '}
                <span style={{ color: '#ddd' }}>
                    Fanfare to (DMG Increase / Incoming Healing Bonus) Conversion
                    Ratio
                </span>{' '}
                for percentages)
            </span>
        ),
        icon: '/images/characters/furina-burst.png',
        effect: (attributes, talentLevels, currentStacks, state) => {
            if (!currentStacks || !talentLevels || !state) {
                return { attributes }
            }

            const arbitraryStackOptions = [0, 50, 100, 150, 200, 250, 300, 350, 400]

            const damageBonus =
                (getTalentScalingValue(
                    state,
                    'Let the People Rejoice',
                    'Fanfare to DMG Increase Conversion Ratio',
                    talentLevels[2]
                ) *
                    arbitraryStackOptions[currentStacks]) /
                100

            const healingBonus =
                (getTalentScalingValue(
                    state,
                    'Let the People Rejoice',
                    'Fanfare to Incoming Healing Bonus Conversion Ratio',
                    talentLevels[2]
                ) *
                    arbitraryStackOptions[currentStacks]) /
                100

            const newAttributes = {
                ...attributes,
                'All DMG Bonus': (attributes['All DMG Bonus'] || 0) + damageBonus,
                'Healing Bonus': (attributes['Healing Bonus'] || 0) + healingBonus,
            }

            return { attributes: newAttributes }
        },
        maxStacks: 8,
        stackOptions: [
            'Off',
            '50',
            '100',
            '150',
            '200',
            '250',
            '300',
            '350 (C1)',
            '400 (C1)',
        ],
        priority: 1,
    },
    {
        name: 'Unheard Confession',
        description: (
            <span>
                <Badge variant="secondary">A4</Badge> Every 1,000 points of
                Furina&apos;s Max HP buffs{' '}
                <span style={{ color: '#ddd' }}>Salon Solitaire</span>&apos;s Salon
                Member DMG by 0.7% (up to 28%)
            </span>
        ),
        icon: '/images/characters/furina-passive2.png',
        effect: (attributes) => {
            const bonusDamage = Math.min(
                0.28,
                (attributes['HP'] / 1000 || 0) * 0.007
            )

            const newAttributes = {
                ...attributes,
                'Salon Members DMG Bonus':
                    (attributes['Salon Members DMG Bonus'] || 0) + bonusDamage,
            }

            return { attributes: newAttributes }
        },
        enabled: true,
        priority: 3,
    },
    {
        name: '"Love is a Rebellious Bird That None Can Tame"',
        description: (
            <span>
                <Badge variant="secondary">C1</Badge> When using{' '}
                <span style={{ color: '#ddd' }}>Let the People Rejoice</span>,
                Furina&apos;s maximum Fanfare stacks is increase by 100 (up to 400)
            </span>
        ),
        icon: '/images/characters/furina-constellation1.png',
        effect: (attributes) => {
            const newAttributes = {
                ...attributes,
                'Fanfare Maximum Stacks':
                    (attributes['Fanfare Maximum Stacks'] || 0) + 100,
            }

            return { attributes: newAttributes }
        },
        minConstellation: 1,
        priority: 1,
    },
    {
        name: '"Hear Me — Let Us Raise the Chalice of Love!"',
        description: (
            <span>
                <Badge variant="secondary">C6</Badge> When using{' '}
                <span style={{ color: '#ddd' }}>Salon Solitaire</span>, Furina&apos;s
                Normal/Charged Attacks and the impact of Plunging Attacks are
                converted to <span style={{ color: '#3d9bc1' }}>Hydro DMG</span>{' '}
                which cannot be overridden by any other elemental infusion. DMG is
                increased by 18%, and hits from these attacks cause different effects
                depending on Furina&apos;s current Arkhe alignment:
                <ul>
                    <li>
                        - Ousia: Every 1s, all nearby characters heal with 4%
                        Furina&apos;s Max HP, for a duration of 2.9s
                    </li>
                    <li>
                        - Pneuma: This attack&apos;s DMG is increased by 25% of
                        Furina&apos;s Max HP. When this attack hits an opponent, all
                        nearby characters consume 1% of their current HP
                    </li>
                </ul>
            </span>
        ),
        icon: '/images/characters/furina-constellation6.png',
        effect: (attributes, talentLevels, currentStacks, state) => {
            if (!talentLevels || !state) return { attributes }

            const newAttributes = {
                ...attributes,
                'All DMG Bonus': (attributes['All DMG Bonus'] || 0) + 0.18,
                'C6 Pneuma DMG Bonus':
                    currentStacks === 2
                        ? (attributes['C6 Pneuma DMG Bonus'] || 0) +
                          attributes['HP'] * 0.25
                        : attributes['C6 Pneuma DMG Bonus'] || 0,
            }

            return { attributes: newAttributes }
        },
        affectsTalentIndex: 0,
        applyToTalentScaling: (talentScaling) => {
            const normalAttackScaling =
                talentScaling["Normal Attack: Soloist's Solicitation"]

            if (normalAttackScaling) {
                Object.values(normalAttackScaling).forEach((aspect) => {
                    if (
                        aspect.formulaType !== FormulaType.DamageFormula ||
                        !aspect.multiplicativeBonusStat
                    )
                        return
                    aspect.multiplicativeBonusStat[0] = 'Hydro DMG Bonus'
                    aspect.damageType = DamageType.Hydro
                })
            }
        },
        minConstellation: 6,
        maxStacks: 2,
        stackOptions: ['Off', 'Ousia', 'Pneuma'],
        priority: 2,
    },
]

const constellationBonuses: Bonus[] = [
    {
        name: '"Love is a Rebellious Bird That None Can Tame"',
        description: (
            <span>
                When using{' '}
                <span style={{ color: '#ddd' }}>Let the People Rejoice</span>, Furina
                will gain 150 Fanfare. Additionally, Furina&apos;s Fanfare limit is
                increased by 100.
            </span>
        ),
        icon: '/images/characters/furina-constellation1.png',
        effect: (attributes) => {
            // * Already handled in characterBonuses
            return { attributes }
        },
        minConstellation: 1,
    },
    {
        name: '"A Woman Adapts Like Duckweed in Water"',
        description: (
            <span>
                While{' '}
                <span style={{ color: '#ddd' }}>Let the People Rejoice lasts</span>,
                Furina&apos;s Fanfare gain from increases or decreases in nearby
                characters&apos; HP is increased by 250%. Each point of Fanfare above
                the limit will increase Furina&apos;s Max HP by 0.35%. Her maximum
                Max HP increase is 140%.
            </span>
        ),
        icon: '/images/characters/furina-constellation2.png',
        effect: (attributes) => {
            // * Unimplementable; no options allow for >400 stacks
            return { attributes }
        },
        minConstellation: 2,
    },
    {
        name: '"My Secret Is Hidden Within Me, No One Will Know My Name"',
        description: (
            <span>
                Increases the Level of{' '}
                <span style={{ color: '#DDD' }}>Let the People Rejoice</span> by 3.
                <br />
                Maximum upgrade level is 15.
            </span>
        ),
        icon: '/images/characters/mona-constellation3.png',
        effect: (attributes, talentLevels) => {
            if (!talentLevels) return { attributes }

            const newTalentLevels = [...talentLevels]
            newTalentLevels[1] = Math.min(newTalentLevels[1] + 3, 13)

            return { attributes: attributes, updatedTalentLevels: newTalentLevels }
        },
        minConstellation: 3,
        priority: 0,
    },
    {
        name: '"They Know Not Life, Who Dwelt in the Netherworld Not!"',
        description: (
            <span>
                When the Salon Members from Salon Solitaire hit an opponent, or the
                Singer of Many Waters restores HP to nearby active characters, Furina
                will restore 4 Energy. This effect can be triggered once every 5s.
            </span>
        ),
        icon: '/images/characters/furina-constellation4.png',
        effect: (attributes) => {
            // * Unimplementable
            return { attributes }
        },
        minConstellation: 4,
    },
    {
        name: '"His Name I Now Know, It Is...!"',
        description: (
            <span>
                Increase the Level of{' '}
                <span style={{ color: '#DDD' }}>Salon Solitaire</span> by 3.
                <br />
                Maximum upgrade level is 15.
            </span>
        ),
        icon: '/images/characters/furina-constellation5.png',
        effect: (attributes, talentLevels) => {
            if (!talentLevels) return { attributes }

            const newTalentLevels = [...talentLevels]
            newTalentLevels[2] = Math.min(newTalentLevels[2] + 3, 13)

            return { attributes: attributes, updatedTalentLevels: newTalentLevels }
        },
        minConstellation: 5,
        priority: 0,
    },
    {
        name: '"Hear Me — Let Us Raise the Chalice of Love!"',
        description: (
            <span>
                When using <span style={{ color: '#ddd' }}>Salon Solitaire</span>,
                Furina gains &quot;Center of Attention&quot; for 10s. Throughout the
                duration, Furina&apos;s Normal Attacks, Charged Attacks, and Plunging
                Attacks are converted into{' '}
                <span style={{ color: '#3d9bc1' }}>Hydro DMG</span> which cannot be
                overridden by any other elemental infusion. DMG is also increased by
                an amount equivalent to 18% of Furina&apos;s max HP. Throughout the
                duration, Furina&apos;s Normal Attacks (not including Arkhe: Seats
                Sacred and Secular Attacks), Charged Attacks, and the impact of
                Plunging Attacks will cause different effects up to every 0.1s after
                hitting opponents depending on her current Arkhe alignment: Arkhe:
                Ousia Every 1s, all nearby characters in the party will be healed by
                4% of Furina&apos;s max HP, for a duration of 2.9s. Triggering this
                effect again will extend its duration. Arkhe: Pneuma This Normal
                Attack (not including Arkhe: Seats Sacred and Secular Attacks),
                Charged Attack, or Plunging Attack ground impact DMG will be further
                increased by an amount equivalent to 25% of Furina&apos;s max HP.
                When any of the attacks mentioned previously hit an opponent, all
                nearby characters in the party will consume 1% of their current HP.
                During the duration of each instance of &quot;Center of
                Attention,&quot; the above effects can be triggered up to 6 times.
                &quot;Center of Attention&quot; will end when its effects have
                triggered 6 times or when the duration expires.
            </span>
        ),
        icon: '/images/characters/furina-constellation6.png',
        effect: (attributes) => {
            // * Already handled in characterBonuses
            return { attributes }
        },
        minConstellation: 6,
    },
]

const Furina: Character = {
    name: 'Furina',
    icon: '/images/characters/furina.png',
    weapon: 'Sword',
    vision: 'Hydro',
    rarity: 5,
    description:
        'The absolute focus of the stage of judgment, until the final applause sounds.',
    occupation: 'Court of Fontaine',
    baseStats: {
        '1/20': {
            'Base HP': 1192.0,
            'Base ATK': 18.99,
            'Base DEF': 54.15,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '20/20': {
            'Base HP': 3091.0,
            'Base ATK': 49.27,
            'Base DEF': 140.46,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '20/40': {
            'Base HP': 4113.0,
            'Base ATK': 65.55,
            'Base DEF': 186.88,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '40/40': {
            'Base HP': 6154.0,
            'Base ATK': 98.08,
            'Base DEF': 279.63,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.0,
        },
        '40/50': {
            'Base HP': 6880.0,
            'Base ATK': 109.65,
            'Base DEF': 312.62,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.048,
        },
        '50/50': {
            'Base HP': 7916.0,
            'Base ATK': 126.16,
            'Base DEF': 359.67,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.048,
        },
        '50/60': {
            'Base HP': 8884.0,
            'Base ATK': 141.58,
            'Base DEF': 403.66,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '60/60': {
            'Base HP': 9930.0,
            'Base ATK': 158.26,
            'Base DEF': 451.2,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '60/70': {
            'Base HP': 10656.0,
            'Base ATK': 169.83,
            'Base DEF': 484.18,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '70/70': {
            'Base HP': 11712.0,
            'Base ATK': 186.66,
            'Base DEF': 532.16,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.096,
        },
        '70/80': {
            'Base HP': 12438.0,
            'Base ATK': 198.23,
            'Base DEF': 565.15,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.144,
        },
        '80/80': {
            'Base HP': 13505.0,
            'Base ATK': 215.24,
            'Base DEF': 613.66,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.144,
        },
        '80/90': {
            'Base HP': 14231.0,
            'Base ATK': 226.81,
            'Base DEF': 646.65,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.192,
        },
        '90/90': {
            'Base HP': 15307.0,
            'Base ATK': 243.96,
            'Base DEF': 695.54,
            'CRIT Rate': 0.05,
            'CRIT DMG': 0.5,
            'Bonus CRIT Rate': 0.192,
        },
    },
    talents: [
        {
            name: "Normal Attack: Soloist's Solicitation",
            image: 'https://genshin.honeyhunterworld.com/img/s_893101.webp',
            description:
                'Normal Attack\nPerforms up to 4 consecutive strikes.\nCharged Attack\nConsumes a certain amount of Stamina to unleash a solo dance, dealing Physical DMG to nearby opponents and changing her Arkhe alignment. If Salon Members or Singer of Many Waters summoned by her Elemental Skill "Salon Solitaire" are present, their lineup will switch in response.\nArkhe: Seats Sacred and Secular\nAt intervals, when Furina\'s Normal Attacks hit, a Spiritbreath Thorn or a Surging Blade will descend based on her current alignment, dealing\nHydro DMG\nbased on her current alignment.\nWhen Furina takes the field, her starting Arkhe will be Ousia.\nPlunging Attack\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.',
            data: {
                '1-Hit DMG': {
                    Lv1: '48.39%',
                    Lv2: '52.32%',
                    Lv3: '56.26%',
                    Lv4: '61.89%',
                    Lv5: '65.83%',
                    Lv6: '70.33%',
                    Lv7: '76.52%',
                    Lv8: '82.71%',
                    Lv9: '88.9%',
                    Lv10: '95.65%',
                    Lv11: '102.4%',
                    Lv12: '109.15%',
                    Lv13: '115.9%',
                    Lv14: '122.65%',
                    Lv15: '129.4%',
                },
                '2-Hit DMG': {
                    Lv1: '43.73%',
                    Lv2: '47.29%',
                    Lv3: '50.85%',
                    Lv4: '55.93%',
                    Lv5: '59.49%',
                    Lv6: '63.56%',
                    Lv7: '69.15%',
                    Lv8: '74.75%',
                    Lv9: '80.34%',
                    Lv10: '86.44%',
                    Lv11: '92.54%',
                    Lv12: '98.65%',
                    Lv13: '104.75%',
                    Lv14: '110.85%',
                    Lv15: '116.95%',
                },
                '3-Hit DMG': {
                    Lv1: '55.12%',
                    Lv2: '59.61%',
                    Lv3: '64.09%',
                    Lv4: '70.5%',
                    Lv5: '74.99%',
                    Lv6: '80.12%',
                    Lv7: '87.17%',
                    Lv8: '94.22%',
                    Lv9: '101.27%',
                    Lv10: '108.96%',
                    Lv11: '116.65%',
                    Lv12: '124.34%',
                    Lv13: '132.03%',
                    Lv14: '139.72%',
                    Lv15: '147.41%',
                },
                '4-Hit DMG': {
                    Lv1: '73.3%',
                    Lv2: '79.26%',
                    Lv3: '85.23%',
                    Lv4: '93.75%',
                    Lv5: '99.72%',
                    Lv6: '106.54%',
                    Lv7: '115.91%',
                    Lv8: '125.29%',
                    Lv9: '134.66%',
                    Lv10: '144.89%',
                    Lv11: '155.12%',
                    Lv12: '165.35%',
                    Lv13: '175.57%',
                    Lv14: '185.8%',
                    Lv15: '196.03%',
                },
                'Charged Attack DMG': {
                    Lv1: '74.22%',
                    Lv2: '80.26%',
                    Lv3: '86.3%',
                    Lv4: '94.93%',
                    Lv5: '100.97%',
                    Lv6: '107.88%',
                    Lv7: '117.37%',
                    Lv8: '126.86%',
                    Lv9: '136.35%',
                    Lv10: '146.71%',
                    Lv11: '157.07%',
                    Lv12: '167.42%',
                    Lv13: '177.78%',
                    Lv14: '188.13%',
                    Lv15: '198.49%',
                },
                'Charged Attack Stamina Cost': {
                    Lv1: '20',
                    Lv2: '20',
                    Lv3: '20',
                    Lv4: '20',
                    Lv5: '20',
                    Lv6: '20',
                    Lv7: '20',
                    Lv8: '20',
                    Lv9: '20',
                    Lv10: '20',
                    Lv11: '20',
                    Lv12: '20',
                    Lv13: '20',
                    Lv14: '20',
                    Lv15: '20',
                },
                'Plunge DMG': {
                    Lv1: '63.93%',
                    Lv2: '69.14%',
                    Lv3: '74.34%',
                    Lv4: '81.77%',
                    Lv5: '86.98%',
                    Lv6: '92.93%',
                    Lv7: '101.1%',
                    Lv8: '109.28%',
                    Lv9: '117.46%',
                    Lv10: '126.38%',
                    Lv11: '135.3%',
                    Lv12: '144.22%',
                    Lv13: '153.14%',
                    Lv14: '162.06%',
                    Lv15: '170.98%',
                },
                'Low Plunge DMG': {
                    Lv1: '127.84%',
                    Lv2: '138.24%',
                    Lv3: '148.65%',
                    Lv4: '163.51%',
                    Lv5: '173.92%',
                    Lv6: '185.81%',
                    Lv7: '202.16%',
                    Lv8: '218.51%',
                    Lv9: '234.86%',
                    Lv10: '252.7%',
                    Lv11: '270.54%',
                    Lv12: '288.38%',
                    Lv13: '306.22%',
                    Lv14: '324.05%',
                    Lv15: '341.89%',
                },
                'High Plunge DMG': {
                    Lv1: '159.68%',
                    Lv2: '172.67%',
                    Lv3: '185.67%',
                    Lv4: '204.24%',
                    Lv5: '217.23%',
                    Lv6: '232.09%',
                    Lv7: '252.51%',
                    Lv8: '272.93%',
                    Lv9: '293.36%',
                    Lv10: '315.64%',
                    Lv11: '337.92%',
                    Lv12: '360.2%',
                    Lv13: '382.48%',
                    Lv14: '404.76%',
                    Lv15: '427.04%',
                },
                'Spiritbreath Thorn/Surging Blade DMG': {
                    Lv1: '9.46%',
                    Lv2: '10.23%',
                    Lv3: '11%',
                    Lv4: '12.1%',
                    Lv5: '12.87%',
                    Lv6: '13.75%',
                    Lv7: '14.96%',
                    Lv8: '16.17%',
                    Lv9: '17.38%',
                    Lv10: '18.7%',
                    Lv11: '20.02%',
                    Lv12: '21.34%',
                    Lv13: '22.66%',
                    Lv14: '23.98%',
                    Lv15: '25.3%',
                },
                'Spiritbreath Thorn/Surging Blade DMG Interval': {
                    Lv1: '6s / 6s',
                    Lv2: '6s / 6s',
                    Lv3: '6s / 6s',
                    Lv4: '6s / 6s',
                    Lv5: '6s / 6s',
                    Lv6: '6s / 6s',
                    Lv7: '6s / 6s',
                    Lv8: '6s / 6s',
                    Lv9: '6s / 6s',
                    Lv10: '6s / 6s',
                    Lv11: '6s / 6s',
                    Lv12: '6s / 6s',
                    Lv13: '6s / 6s',
                    Lv14: '6s / 6s',
                    Lv15: '6s / 6s',
                },
                'C6 Ousia Per-Hit Healing': {
                    Lv1: '4.0% Max HP',
                    Lv2: '4.0% Max HP',
                    Lv3: '4.0% Max HP',
                    Lv4: '4.0% Max HP',
                    Lv5: '4.0% Max HP',
                    Lv6: '4.0% Max HP',
                    Lv7: '4.0% Max HP',
                    Lv8: '4.0% Max HP',
                    Lv9: '4.0% Max HP',
                    Lv10: '4.0% Max HP',
                    Lv11: '4.0% Max HP',
                    Lv12: '4.0% Max HP',
                    Lv13: '4.0% Max HP',
                    Lv14: '4.0% Max HP',
                    Lv15: '4.0% Max HP',
                },
                'C6 Pneuma Per-Hit HP Consumption': {
                    Lv1: '1.0% Max HP',
                    Lv2: '1.0% Max HP',
                    Lv3: '1.0% Max HP',
                    Lv4: '1.0% Max HP',
                    Lv5: '1.0% Max HP',
                    Lv6: '1.0% Max HP',
                    Lv7: '1.0% Max HP',
                    Lv8: '1.0% Max HP',
                    Lv9: '1.0% Max HP',
                    Lv10: '1.0% Max HP',
                    Lv11: '1.0% Max HP',
                    Lv12: '1.0% Max HP',
                    Lv13: '1.0% Max HP',
                    Lv14: '1.0% Max HP',
                    Lv15: '1.0% Max HP',
                },
            },
        },
        {
            name: 'Salon Solitaire',
            image: 'https://genshin.honeyhunterworld.com/img/s_893201.webp',
            description:
                "Invites the guests of the Salon Solitaire to come forth and abet in Furina's performance. Will summon either the Salon Members or the Singer of Many Waters based on Furina's current\nArkhe alignment\n.\nOusia\nFoaming bubbles like celebrants shall dance, dealing\nAoE Hydro DMG\nbased on Furina's Max HP and summoning 3 Salon Members: the Ball Octopus-shaped Gentilhomme Usher, the Bubbly Seahorse-shaped Surintendante Chevalmarin, and the Armored Crab-shaped Mademoiselle Crabaletta.\nThey will attack nearby opponents at intervals, prioritizing the target of the active character, dealing\nHydro\nDMG based on Max HP.\nWhen they attack, if character(s) with more than 50% HP are nearby, the Members will increase their current attack's power based on the number of such characters, and consume said characters' HP. If 1/2/3/4 (or more) characters meet these requirements, the Members' attacks will deal 110%/120%/130%/140% of their original DMG.\nPneuma\nSummons the Singer of Many Waters, who will heal nearby active character(s) based on Max HP at intervals.\nThe Salon Members and Singer of Many Waters share a duration, and when Furina uses her Charged Attack to change the guest type, the new guests will inherit the initial duration.\nWhile the Salon Members or the Singer of Many Waters is on the field, Furina can move on the water's surface.\nA fixed roster of regulars frequent Furina's Salon Solitaire. At other times, Mademoiselle Crabaletta, Surintendante Chevalmarin, and Gentilhomme Usher shall visit, and on gloomy Wednesdays, it is the singer who comes by.",
            data: {
                'Ousia Bubble DMG': {
                    Lv1: '7.86% Max HP',
                    Lv2: '8.45% Max HP',
                    Lv3: '9.04% Max HP',
                    Lv4: '9.83% Max HP',
                    Lv5: '10.42% Max HP',
                    Lv6: '11.01% Max HP',
                    Lv7: '11.8% Max HP',
                    Lv8: '12.58% Max HP',
                    Lv9: '13.37% Max HP',
                    Lv10: '14.16% Max HP',
                    Lv11: '14.94% Max HP',
                    Lv12: '15.73% Max HP',
                    Lv13: '16.71% Max HP',
                    Lv14: '17.69% Max HP',
                    Lv15: '18.68% Max HP',
                },
                Duration: {
                    Lv1: '30s',
                    Lv2: '30s',
                    Lv3: '30s',
                    Lv4: '30s',
                    Lv5: '30s',
                    Lv6: '30s',
                    Lv7: '30s',
                    Lv8: '30s',
                    Lv9: '30s',
                    Lv10: '30s',
                    Lv11: '30s',
                    Lv12: '30s',
                    Lv13: '30s',
                    Lv14: '30s',
                    Lv15: '30s',
                },
                'Gentilhomme Usher DMG': {
                    Lv1: '5.96% Max HP',
                    Lv2: '6.41% Max HP',
                    Lv3: '6.85% Max HP',
                    Lv4: '7.45% Max HP',
                    Lv5: '7.9% Max HP',
                    Lv6: '8.34% Max HP',
                    Lv7: '8.94% Max HP',
                    Lv8: '9.54% Max HP',
                    Lv9: '10.13% Max HP',
                    Lv10: '10.73% Max HP',
                    Lv11: '11.32% Max HP',
                    Lv12: '11.92% Max HP',
                    Lv13: '12.67% Max HP',
                    Lv14: '13.41% Max HP',
                    Lv15: '14.16% Max HP',
                },
                'Surintendante Chevalmarin DMG': {
                    Lv1: '3.23% Max HP',
                    Lv2: '3.47% Max HP',
                    Lv3: '3.72% Max HP',
                    Lv4: '4.04% Max HP',
                    Lv5: '4.28% Max HP',
                    Lv6: '4.52% Max HP',
                    Lv7: '4.85% Max HP',
                    Lv8: '5.17% Max HP',
                    Lv9: '5.49% Max HP',
                    Lv10: '5.82% Max HP',
                    Lv11: '6.14% Max HP',
                    Lv12: '6.46% Max HP',
                    Lv13: '6.87% Max HP',
                    Lv14: '7.27% Max HP',
                    Lv15: '7.68% Max HP',
                },
                'Mademoiselle Crabaletta DMG': {
                    Lv1: '8.29% Max HP',
                    Lv2: '8.91% Max HP',
                    Lv3: '9.53% Max HP',
                    Lv4: '10.36% Max HP',
                    Lv5: '10.98% Max HP',
                    Lv6: '11.6% Max HP',
                    Lv7: '12.43% Max HP',
                    Lv8: '13.26% Max HP',
                    Lv9: '14.09% Max HP',
                    Lv10: '14.92% Max HP',
                    Lv11: '15.75% Max HP',
                    Lv12: '16.58% Max HP',
                    Lv13: '17.61% Max HP',
                    Lv14: '18.65% Max HP',
                    Lv15: '19.68% Max HP',
                },
                'Gentilhomme Usher HP Consumption': {
                    Lv1: '2.4% Max HP',
                    Lv2: '2.4% Max HP',
                    Lv3: '2.4% Max HP',
                    Lv4: '2.4% Max HP',
                    Lv5: '2.4% Max HP',
                    Lv6: '2.4% Max HP',
                    Lv7: '2.4% Max HP',
                    Lv8: '2.4% Max HP',
                    Lv9: '2.4% Max HP',
                    Lv10: '2.4% Max HP',
                    Lv11: '2.4% Max HP',
                    Lv12: '2.4% Max HP',
                    Lv13: '2.4% Max HP',
                    Lv14: '2.4% Max HP',
                    Lv15: '2.4% Max HP',
                },
                'Surintendante Chevalmarin HP Consumption': {
                    Lv1: '1.6% Max HP',
                    Lv2: '1.6% Max HP',
                    Lv3: '1.6% Max HP',
                    Lv4: '1.6% Max HP',
                    Lv5: '1.6% Max HP',
                    Lv6: '1.6% Max HP',
                    Lv7: '1.6% Max HP',
                    Lv8: '1.6% Max HP',
                    Lv9: '1.6% Max HP',
                    Lv10: '1.6% Max HP',
                    Lv11: '1.6% Max HP',
                    Lv12: '1.6% Max HP',
                    Lv13: '1.6% Max HP',
                    Lv14: '1.6% Max HP',
                    Lv15: '1.6% Max HP',
                },
                'Mademoiselle Crabaletta HP Consumption': {
                    Lv1: '3.6% Max HP',
                    Lv2: '3.6% Max HP',
                    Lv3: '3.6% Max HP',
                    Lv4: '3.6% Max HP',
                    Lv5: '3.6% Max HP',
                    Lv6: '3.6% Max HP',
                    Lv7: '3.6% Max HP',
                    Lv8: '3.6% Max HP',
                    Lv9: '3.6% Max HP',
                    Lv10: '3.6% Max HP',
                    Lv11: '3.6% Max HP',
                    Lv12: '3.6% Max HP',
                    Lv13: '3.6% Max HP',
                    Lv14: '3.6% Max HP',
                    Lv15: '3.6% Max HP',
                },
                'Singer of Many Waters Healing': {
                    Lv1: '4.8% Max HP + 462.23',
                    Lv2: '5.16% Max HP + 508.45',
                    Lv3: '5.52% Max HP + 558.54',
                    Lv4: '6% Max HP + 612.47',
                    Lv5: '6.36% Max HP + 670.26',
                    Lv6: '6.72% Max HP + 731.89',
                    Lv7: '7.2% Max HP + 797.39',
                    Lv8: '7.68% Max HP + 866.73',
                    Lv9: '8.16% Max HP + 939.92',
                    Lv10: '8.64% Max HP + 1016.97',
                    Lv11: '9.12% Max HP + 1097.87',
                    Lv12: '9.6% Max HP + 1182.63',
                    Lv13: '10.2% Max HP + 1271.23',
                    Lv14: '10.8% Max HP + 1363.69',
                    Lv15: '11.4% Max HP + 1460',
                },
                CD: {
                    Lv1: '20s',
                    Lv2: '20s',
                    Lv3: '20s',
                    Lv4: '20s',
                    Lv5: '20s',
                    Lv6: '20s',
                    Lv7: '20s',
                    Lv8: '20s',
                    Lv9: '20s',
                    Lv10: '20s',
                    Lv11: '20s',
                    Lv12: '20s',
                    Lv13: '20s',
                    Lv14: '20s',
                    Lv15: '20s',
                },
            },
        },
        {
            name: 'Let the People Rejoice',
            image: 'https://genshin.honeyhunterworld.com/img/s_893901.webp',
            description:
                "Rouses the impulse to revel, creating a stage of foam that will deal\nAoE Hydro DMG\nbased on Furina's Max HP and cause nearby party members to enter the Universal Revelry state: During this time, when nearby party members' HP increases or decreases, 1 Fanfare point will be granted to Furina for each percentage point of their Max HP by which their HP changes.\nAt the same time, Furina will increase the DMG dealt by and Incoming Healing Bonus of all nearby party members based on the amount of Fanfare she has.\nWhen the duration ends, Furina's Fanfare points will be cleared.\n\"Cheer! Give praise! Be awed! Raise your glasses! Every night bereft of banqueting is a sordid squandering of sore, sober daylight... And, uh, those who are not yet of age may have grape juice instead!\"",
            data: {
                'Skill DMG': {
                    Lv1: '11.41% Max HP',
                    Lv2: '12.26% Max HP',
                    Lv3: '13.12% Max HP',
                    Lv4: '14.26% Max HP',
                    Lv5: '15.11% Max HP',
                    Lv6: '15.97% Max HP',
                    Lv7: '17.11% Max HP',
                    Lv8: '18.25% Max HP',
                    Lv9: '19.39% Max HP',
                    Lv10: '20.53% Max HP',
                    Lv11: '21.67% Max HP',
                    Lv12: '22.81% Max HP',
                    Lv13: '24.24% Max HP',
                    Lv14: '25.66% Max HP',
                    Lv15: '27.09% Max HP',
                },
                Duration: {
                    Lv1: '18s',
                    Lv2: '18s',
                    Lv3: '18s',
                    Lv4: '18s',
                    Lv5: '18s',
                    Lv6: '18s',
                    Lv7: '18s',
                    Lv8: '18s',
                    Lv9: '18s',
                    Lv10: '18s',
                    Lv11: '18s',
                    Lv12: '18s',
                    Lv13: '18s',
                    Lv14: '18s',
                    Lv15: '18s',
                },
                'Maximum Fanfare': {
                    Lv1: '300',
                    Lv2: '300',
                    Lv3: '300',
                    Lv4: '300',
                    Lv5: '300',
                    Lv6: '300',
                    Lv7: '300',
                    Lv8: '300',
                    Lv9: '300',
                    Lv10: '300',
                    Lv11: '300',
                    Lv12: '300',
                    Lv13: '300',
                    Lv14: '300',
                    Lv15: '300',
                },
                'Fanfare to DMG Increase Conversion Ratio': {
                    Lv1: '0.07%',
                    Lv2: '0.09%',
                    Lv3: '0.11%',
                    Lv4: '0.13%',
                    Lv5: '0.15%',
                    Lv6: '0.17%',
                    Lv7: '0.19%',
                    Lv8: '0.21%',
                    Lv9: '0.23%',
                    Lv10: '0.25%',
                    Lv11: '0.27%',
                    Lv12: '0.29%',
                    Lv13: '0.31%',
                    Lv14: '0.33%',
                    Lv15: '0.35%',
                },
                'Fanfare to Incoming Healing Bonus Conversion Ratio': {
                    Lv1: '0.01%',
                    Lv2: '0.02%',
                    Lv3: '0.03%',
                    Lv4: '0.04%',
                    Lv5: '0.05%',
                    Lv6: '0.06%',
                    Lv7: '0.07%',
                    Lv8: '0.08%',
                    Lv9: '0.09%',
                    Lv10: '0.1%',
                    Lv11: '0.11%',
                    Lv12: '0.12%',
                    Lv13: '0.13%',
                    Lv14: '0.14%',
                    Lv15: '0.15%',
                },
                CD: {
                    Lv1: '15s',
                    Lv2: '15s',
                    Lv3: '15s',
                    Lv4: '15s',
                    Lv5: '15s',
                    Lv6: '15s',
                    Lv7: '15s',
                    Lv8: '15s',
                    Lv9: '15s',
                    Lv10: '15s',
                    Lv11: '15s',
                    Lv12: '15s',
                    Lv13: '15s',
                    Lv14: '15s',
                    Lv15: '15s',
                },
                'Energy Cost': {
                    Lv1: '60',
                    Lv2: '60',
                    Lv3: '60',
                    Lv4: '60',
                    Lv5: '60',
                    Lv6: '60',
                    Lv7: '60',
                    Lv8: '60',
                    Lv9: '60',
                    Lv10: '60',
                    Lv11: '60',
                    Lv12: '60',
                    Lv13: '60',
                    Lv14: '60',
                    Lv15: '60',
                },
            },
        },
    ],
    passiveSkills: [
        {
            name: 'The Sea Is My Stage',
            image: 'https://genshin.honeyhunterworld.com/img/p_892301.webp',
            description:
                'Xenochromatic Fontemer Aberrant ability CD decreased by 30%.',
        },
        {
            name: 'Endless Waltz',
            image: 'https://genshin.honeyhunterworld.com/img/p_892101.webp',
            description:
                'When the active character in your party receives healing, if the source of the healing is not Furina herself and the healing overflows, then Furina will heal a nearby party member for 2% of their Max HP once every 2s within the next 4s.',
        },
        {
            name: 'Unheard Confession',
            image: 'https://genshin.honeyhunterworld.com/img/p_892201.webp',
            description:
                "Every 1,000 points of Furina's Max HP can buff the different Arkhe-aligned\nSalon Solitaire\nin the following ways:\nWill increase Salon Member DMG dealt by 0.7%, up to a maximum of 28%.\nWill decrease active character healing interval of the Singer of Many Waters by 0.4%, up to a maximum of 16%.",
        },
    ],
    constellations: [
        {
            name: '"Love Is a Rebellious Bird That None Can Tame"',
            image: 'https://genshin.honeyhunterworld.com/img/c_891.webp',
            description:
                "When using\nLet the People Rejoice\n, Furina will gain 150 Fanfare.\nAdditionally, Furina's Fanfare limit is increased by 100.",
            level: 1,
        },
        {
            name: '"A Woman Adapts Like Duckweed in Water"',
            image: 'https://genshin.honeyhunterworld.com/img/c_892.webp',
            description:
                "While\nLet the People Rejoice\nlasts, Furina's Fanfare gain from increases or decreases in nearby characters' HP is increased by 250%. Each point of Fanfare above the limit will increase Furina's Max HP by 0.35%. Her maximum Max HP increase is 140%.",
            level: 2,
        },
        {
            name: '"My Secret Is Hidden Within Me, No One Will Know My Name"',
            image: 'https://genshin.honeyhunterworld.com/img/c_893.webp',
            description:
                'Increases the Level of\nLet the People Rejoice\nby 3.\nMaximum upgrade level is 15.',
            level: 3,
        },
        {
            name: '"They Know Not Life, Who Dwelt in the Netherworld Not!"',
            image: 'https://genshin.honeyhunterworld.com/img/c_894.webp',
            description:
                'When the Salon Members from\nSalon Solitaire\nhit an opponent, or the Singer of Many Waters restores HP to the active character, Furina will restore 4 Energy. This effect triggers once every 5s.',
            level: 4,
        },
        {
            name: '"His Name I Now Know, It Is...!"',
            image: 'https://genshin.honeyhunterworld.com/img/c_895.webp',
            description:
                'Increases the Level of\nSalon Solitaire\nby 3.\nMaximum upgrade level is 15.',
            level: 5,
        },
        {
            name: '"Hear Me \u2014 Let Us Raise the Chalice of Love!"',
            image: 'https://genshin.honeyhunterworld.com/img/c_896.webp',
            description:
                'When using\nSalon Solitaire\n, Furina gains "Center of Attention" for 10s.\nThroughout the duration, Furina\'s Normal Attacks, Charged Attacks, and Plunging Attacks are converted into\nHydro DMG\nwhich cannot be overridden by any other elemental infusion. DMG is also increased by an amount equivalent to 18% of Furina\'s max HP.\nThroughout the duration, Furina\'s Normal Attacks (not including Arkhe: Seats Sacred and Secular Attacks), Charged Attacks, and the impact of Plunging Attacks will cause different effects up to every 0.1s after hitting opponents depending on her current Arkhe alignment:\nArkhe: Ousia\nEvery 1s, all nearby characters in the party will be healed by 4% of Furina\'s max HP, for a duration of 2.9s. Triggering this effect again will extend its duration.\nArkhe: Pneuma\nThis Normal Attack (not including Arkhe: Seats Sacred and Secular Attacks), Charged Attack, or Plunging Attack ground impact DMG will be further increased by an amount equivalent to 25% of Furina\'s max HP. When any of the attacks mentioned previously hit an opponent, all nearby characters in the party will consume 1% of their current HP.\nDuring the duration of each instance of "Center of Attention," the above effects can be triggered up to 6 times. "Center of Attention" will end when its effects have triggered 6 times or when the duration expires.',
            level: 6,
        },
    ],
    talentScalings,
    characterBonuses,
    constellationBonuses,
}

export default Furina
