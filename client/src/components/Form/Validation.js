const Validation = (data) => {
    let errors = {}

    if (!data.name) {
        errors.name = 'Por favor, ingrese el nombre de la actividad'
    } else if (!/^[a-zA-Z\s]+$/.test(data.name)) {
        errors.name = 'El nombre no puede contener números ni caracteres especiales'
    }
    if (!data.difficulty) {
        errors.dificulty = 'Seleccione la dificultad'
    }

    if (!data.season) {
        errors.season = 'Por favor, seleccione una temporada para continuar'
    }

    if (data.duration < 1 || data.duration > 24) {
        errors.duration = 'La duración debe ser entre 1 y 24 hs'
    }

    if (!data.country) {
        errors.country = 'Debe seleccionar al menos un país'
    }

    return errors
}


export default Validation




