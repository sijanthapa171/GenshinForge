import { FilterAndSort } from '@/components'
import { characterBonuses } from '@/data'
import { Bonus, Character } from '@/types/Character'
import { compareElement, elementColors } from '@/utils'
import {
    Box,
    Flex,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react'

interface CharacterModalProps {
    isOpen: boolean
    onClose: () => void
    characters: Character[]
    setCharacter: (character: Character) => void
    setActiveBonuses: (activeBonuses: Bonus[]) => void
}

const CharacterModal = ({
    isOpen,
    onClose,
    characters,
    setCharacter,
    setActiveBonuses,
}: CharacterModalProps) => {
    // Defaulting to "all" filter, "element" sort
    const [filterValue, setFilterValue] = useState<string[]>(['all'])
    const [sortOrder, setSortOrder] = useState<string>('element')

    const filterAndSortCharacters = () => {
        // Filters characters by element
        const filteredCharacters =
            filterValue.includes('all') || !filterValue.length
                ? characters
                : characters.filter((character) =>
                      filterValue.includes(character.vision.toLowerCase())
                  )
        // Sorts characters by name and element
        const sortedCharacters = filteredCharacters.sort((a, b) => {
            switch (sortOrder) {
                case 'asc':
                    return a.name.localeCompare(b.name)
                case 'desc':
                    return b.name.localeCompare(a.name)
                case 'element':
                    return compareElement(
                        a.vision.toLowerCase(),
                        b.vision.toLowerCase()
                    )
                default:
                    return 0
            }
        })
        return sortedCharacters
    }

    const availableCharacter = (character: Character) =>
        !!characterBonuses[character.name]

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay
                sx={{ backdropFilter: 'blur(5px)' }}
                bg={useColorModeValue(
                    'rgba(0, 0, 0, 0.5)',
                    'rgba(255, 255, 255, 0.2)'
                )}
            />
            <ModalContent>
                <Flex
                    as={ModalBody}
                    className="h-screen items-center justify-center"
                >
                    <Box className="max-h-[80vh] w-[80vw] overflow-auto overflow-x-hidden rounded-lg bg-background border p-4 xl:h-auto xl:w-[80vw]">
                        <ModalHeader className="mb-4 flex items-center justify-between">
                            Select a Character
                            <ModalCloseButton />
                        </ModalHeader>
                        <FilterAndSort
                            filterValue={filterValue}
                            setFilterValue={setFilterValue}
                            sortOrder={sortOrder}
                            setSortOrder={setSortOrder}
                        />
                        <Flex className="flex-wrap justify-center gap-[6px]">
                            {filterAndSortCharacters().map((character) => (
                                <Image
                                    key={character.name}
                                    src={character.icon}
                                    alt={character.name}
                                    onClick={() => {
                                        if (!availableCharacter(character)) return
                                        setCharacter(character)
                                        setActiveBonuses(
                                            characterBonuses[character.name].filter(
                                                (bonus) => bonus.enabled
                                            )
                                        )
                                        onClose()
                                    }}
                                    bg={
                                        elementColors[
                                            character.vision.toLowerCase() as keyof typeof elementColors
                                        ]
                                    }
                                    className={`cursor-pointer rounded-full object-cover hover:scale-105 ${
                                        availableCharacter(character)
                                            ? ''
                                            : 'pointer-events-none opacity-50'
                                    }`}
                                    boxSize="70px"
                                    placeholder="blur"
                                />
                            ))}
                        </Flex>
                    </Box>
                </Flex>
            </ModalContent>
        </Modal>
    )
}

export default CharacterModal
