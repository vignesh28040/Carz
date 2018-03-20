export interface Cars {
    Id: number;
    Name: string;
    MinPrice: string;
    MaxPrice: string
    ImageUrl: string;
    Images: CarImages[];
}

export interface CarImages {
    ImageName: string;
    ImageUrl: string;
}

export const CarsList: Cars[] = [
    {
        Id: 1,
        Name: 'Ford-Mustang',
        MinPrice: '20.75',
        MaxPrice: '30.75',
        ImageUrl: '//imgd.aeplcdn.com/1280x720/cw/ec/23766/Ford-Mustang-Right-Front-Three-Quarter-76173.jpg',
        Images: [{
            ImageName: 'Ford Mustang White',
            ImageUrl: '//di-uploads-pod5.dealerinspire.com/islandford/uploads/2016/08/rsz_17mustang.png'
        },
        {
            ImageName: 'Ford Mustang Red',
            ImageUrl: '//di-uploads-pod5.dealerinspire.com/beachford/uploads/2016/10/2017-Ford-Mustang-On-White.png'
        }]
    },
    {
        Id: 2,
        Name: 'Maruti Swift',
        MinPrice: '12.75',
        MaxPrice: '20.75',
        ImageUrl: '//imgct2.aeplcdn.com/img/800x600/car-data/big/maruti-suzuki-swift-image-11306.png',
        Images: [{
            ImageName: 'Maruti Swift Gear',
            ImageUrl: '//5.imimg.com/data5/XT/XD/GLADMIN-26895595/maruti-swift-car-500x500.png'
        },
        {
            ImageName: 'Maruti Swift Ultra',
            ImageUrl: '//data1.ibtimes.co.in/cache-img-0-450/en/full/631457/1483197542_2017-suzuki-swift.png'
        }]
    },
]