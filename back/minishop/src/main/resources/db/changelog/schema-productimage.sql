create table ProductImage (
   Id                   int                  identity,
   URL                  nvarchar(2080)       not null,
   Sequency             int                  not null,
   ProductId            int                  not null,

   constraint PK_PRODUCTIMAGE primary key (Id)
)
go

/*==============================================================*/
/* Index: IndexProductSupplierId                                */
/*==============================================================*/
create index IndexProductImageProductId on ProductImage (
   ProductId ASC
)
go

alter table ProductImage
   add constraint FK_PRODUCTIMAGE_REFERENCE_PRODUCT foreign key (ProductId)
      references Product (Id)
go