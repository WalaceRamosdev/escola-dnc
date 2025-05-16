function calculate (targetDate) {
    const currentDate = new Date();
    const futureDate = new Date(targetDate);

    if (isNaN(targetDate)) {
        throw new Error('Formato de entrada inválido')
    }

    if (futureDate <= currentDate) {
        return {error: 'Esta data está no passado'}
    }

    const diffInMillis = futureDate - currentDate
    const diffInMinutes = Math.floor(diffInMillis / (1000 * 60))
    const days = Math.floor(diffInMinutes / (60*24))
    const hours = Math.floor(diffInMinutes % (60*24) / 60)
    const minutes = Math.floor (diffInMinutes % 60)

    return {
        days,
        hours,
        minutes
    }
}

module.exports = { calculate };