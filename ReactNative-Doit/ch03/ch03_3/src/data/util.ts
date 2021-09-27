export const makeArray = (length: number) => {
    return new Array(length).fill(null)
}

export const random = (min: number, max: number): number => {
    return Math.round(Math.random() * (max - min)) + min
}

export const unsplashUrl = (width: number, height: number): string => {
    return `https://source.unsplash.com/random/${width}x${height}`
}

export const avatarUriByName = (name: string) => {
    return `https://uri-avatars.com/api/?name=${name.split(' ').join('+')}`
}