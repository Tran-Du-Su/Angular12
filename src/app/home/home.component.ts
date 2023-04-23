import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public districts: string[] = ['Quận/Huyện'];
  public vietNamData = [
    {city: 'Tỉnh/Thanh phố', district: ['Quận/Huyện']},
    {
      city: 'Huế',
      district: [
        'Thành phố Huế',
        'Thị xã Hương Thủy',
        'Huyện A Lưới',
        'Huyện Nam Đông',
        'Huyện Phong Điền',
        'Huyện Phú Lộc',
        'Huyện Phú Vang',
        'Huyện Quảng Điền',
      ],
    },
    {
      city: 'Hà Nội',
      district: [
        'Quận Ba Đình',
        'Huyện Ba Vì',
        'Quận Bắc Từ Liêm',
        'Quận Cầu Giấy',
        'Huyện Chương Mỹ',
        'Huyện Đan Phượng',
        'Huyện Đông Anh',
        'Quận Đống Đa',
        'Huyện Gia Lâm',
        'Quận Hà Đông',
        'Quận Hai Bà Trưng',
        'Huyện Hoài Đức',
        'Quận Hoàn Kiếm',
        'Quận Hoàng Mai',
        'Quận Long Biên',
        'Huyện Mê Linh',
        'Huyện Mỹ Đức',
        'Quận Nam Từ Liêm',
        'Huyện Phú Xuyên',
        'Huyện Phúc Thọ',
        'Huyện Quốc Oai',
        'Huyện Sóc Sơn',
        'Thị xã Sơn Tây',
        'Quận Tây Hồ',
        'Huyện Thạch Thất',
        'Huyện Thanh Oai',
        'Huyện Thanh Trì',
        'Quận Thanh Xuân',
        'Huyện Thường Tín',
        'Huyện Ứng Hòa',
      ],
    },
    {
      city: 'Hồ Chí Minh',
      district: [
        'Quận 1',
        'Quận 2',
        'Quận 3',
        'Quận 4',
        'Quận 5',
        'Quận 6',
        'Quận 7',
        'Quận 8',
        'Quận 9',
        'Quận 10',
        'Quận 11',
        'Quận 12',
        'Quận Bình Tân',
        'Quận Bình Thạnh',
        'Quận Gò Vấp',
        'Quận Phú Nhuận',
        'Quận Tân Bình',
        'Quận Tân Phú',
        'Quận Thủ Đức',
        'Huyện Bình Chánh',
        'Huyện Cần Giờ',
        'Huyện Củ Chi',
        'Huyện Hóc Môn',
        'Huyện Nhà Bè',
      ],
    },
    {
      city: 'Đà Nẵng',
      district: [
        'Quận Cẩm Lệ',
        'Quận Hải Châu',
        'Quận Liên Chiểu',
        'Quận Ngũ Hành Sơn',
        'Quận Sơn Trà',
        'Quận Thanh Khê',
        'Huyện Hòa Vang',
        'Huyện Hoàng Sa',
      ],
    },
    {
      city: 'Đồng Nai',
      district: [
        'Thành phố Biên Hòa',
        'Thị xã Long Khánh',
        'Quận Tân Phú',
        'Huyện Cẩm Mỹ',
        'Huyện Định Quán',
        'Huyện Long Thành',
        'Huyện Nhơn Trạch',
        'Huyện Thống Nhất',
        'Huyện Trảng Bom',
        'Huyện Vĩnh Cửu',
        'Huyện Xuân Lộc',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  public changeCity(event: any): void {
    const city = event.target.value;
    if (!city) {
      return;
    }

    // cách 1
    // const search= this.vietNamData.filter(data => data.city === city);
    // if (search && search.length > 0) {
    //   this.districts = search[0].district;
    // }

    // cách 2
    this.districts = this.vietNamData.find(data => data.city === city) ?.district || [];
  }
}
