export const createDictionary = async () => {
    const res = await fetch('https://cloud-api.yandex.net/v1/disk/resources', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization:
                "OAuth " +
                "y0_AgAAAAA89Q_-AAz88gAAAAEc7zBFAAB05-5qeeFHVZQUsTbKnWQceDOXwA",
        }
    })
    console.log('createDictionary res ', res);
}

export const getDiskProfile = async () => {
    const res = await fetch('https://cloud-api.yandex.net/v1/disk/', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization:
                "OAuth " +
                "y0_AgAAAAA89Q_-AAz88gAAAAEc7zBFAAB05-5qeeFHVZQUsTbKnWQceDOXwA",
        }
    })
    console.log('getDiskProfile res ', res);
}

export const getImageFromDisk = async () => {
    const res = await fetch('https://cloud-api.yandex.net/v1/disk/resources/download?path=/Горы.jpg', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization:
                "OAuth " +
                "y0_AgAAAAA89Q_-AAz88gAAAAEc7zBFAAB05-5qeeFHVZQUsTbKnWQceDOXwA",
        }
    })
    console.log('getDiskProfile res ', res);
}


export const getLastPublicFiles = async () => {
    const res: any = await fetch('https://cloud-api.yandex.net/v1/disk/resources/public', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization:
                "OAuth " +
                "y0_AgAAAAA89Q_-AAz88gAAAAEc7zBFAAB05-5qeeFHVZQUsTbKnWQceDOXwA",
        }
    })
    const data = await res.json();
    console.log('getDiskProfile data ', data);
}

// TODO доделать
export const getPublicFile = async () => {
    const res: any = await fetch('https://cloud-api.yandex.net/v1/disk/public/resources', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization:
                "OAuth " +
                "y0_AgAAAAA89Q_-AAz88gAAAAEc7zBFAAB05-5qeeFHVZQUsTbKnWQceDOXwA",
        }
    })
    const data = await res.json();
    console.log('getDiskProfile data ', data);
}

export const sendFile = async () => {
    const res: any = await fetch('https://cloud-api.yandex.net/v1/disk/resources/upload?path=2.jpg', {
        method: 'GET',
        headers: {
            Authorization:
                "OAuth " +
                "y0_AgAAAAA89Q_-AAz88gAAAAEc7zBFAAB05-5qeeFHVZQUsTbKnWQceDOXwA",
        }
    })
    const data = await res.json();
    console.log('getDiskProfile data ', data);
    await saveFileInYandexDisk(data.href)
}

export const saveFileInYandexDisk = async (url: string) => {
    console.log('saveFileInYandexDisk', url);
    const res: any = await fetch(url, {
        method: 'PUT',
        // headers: {
        //     "Content-Type": "application/json",
        //     Authorization:
        //         "OAuth " +
        //         "y0_AgAAAAA89Q_-AAz88gAAAAEc7zBFAAB05-5qeeFHVZQUsTbKnWQceDOXwA",
        // }
    })
    const data = await res.json();
    console.log('saveFileInYandexDisk data ', data);
}