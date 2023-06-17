# TechDev Team #
## Integrantes ##

* Luis Felipe Jimenez Lopez (maveryk00)
* Alessandro Eros Chumpitazi Altamirano (Daker515)
* Jhezmain Ambrajhaham Carranza Perales (Jhezmain)
* Leonardo André Dorado Sánchez (LeonardoDS01)
* Luis Fernando Salas (Fernando Salas)
* Piero Carrillo Malla (Piero Carrillo)
* Renzo Pedro Mezones Estrada (Renzo Mezones)
* Martin Steven Perez Salazar (martin170520)


## application.properties ##
Agregar las siguientes propiedades en:
```
src/main/resources/application.properties
```
```ruby
# config Base de Datos
spring.datasource.url=jdbc:mysql://[server]:[port]/[data_base]
spring.datasource.username=[username]
spring.datasource.password=[password]

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect

#  config server
server.port=[server_port]]
spring.mvc.hiddenmethod.filter.enabled=true
spring.output.ansi.enabled=always

# sorporte para camel case y snake case
spring.jpa.hibernate.naming.implicit-strategy=org.hibernate.boot.model.naming.ImplicitNamingStrategyLegacyJpaImpl
spring.jpa.hibernate.naming.physical-strategy=org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl

# soporte para reload de templates
spring.thymeleaf.cache=false
spring.thymeleaf.mode=LEGACYHTML5
spring.thymeleaf.templates_root=src/main/resources/templates/

# soporte para reload de static
spring.web.resources.static-locations[0]=file:src/main/resources/static/
spring.web.resources.static-locations[1]=classpath:/static
```
