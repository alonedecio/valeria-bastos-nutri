import fs from 'node:fs';import path from 'node:path';
const root=process.cwd(),dist=path.join(root,'dist');fs.rmSync(dist,{recursive:true,force:true});fs.mkdirSync(dist,{recursive:true});for(const name of ['index.html','treino-e-rotina','shared','assets'])fs.cpSync(path.join(root,name),path.join(dist,name),{recursive:true});console.log('Site estático preparado em dist/');
