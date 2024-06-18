

const Table = () => {
        return (
          <form action="#">
            <div className="container" style={{ color: 'rgb(50, 102, 152)', margin: '0 auto', maxWidth:'1200px' }}>
              <h1>Colposcopy report (2011 IFCPC nomenclature):</h1>
              <h2>IFCPC nomenclature:</h2>
              <div className="general">
                <div className="head">
                  <div className="genDiv" style={{ backgroundColor: '#326698' }}>
                    <h2 style={{ color: '#deeaff' }}>-General assessment:</h2>
                  </div>
                  <div className="headBody" style={{ marginTop: '20px' }}>
                    <div className="headTitle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px' }}>
                      <span style={{ fontSize: '20px' }}>Adequacy:</span>
                      <select style={{ width: '10%', height: '40px' }}>
                        <option value="">---------------</option>
                        <option value="adequate">Adequate</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                    <div className="headTitle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px' }}>
                      <span style={{ fontSize: '20px' }}>Squamo-columnar junction visibility:</span>
                      <select style={{ width: '10%', height: '40px' }}>
                        <option value="">---------------</option>
                        <option value="adequate">Adequate</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                    <div className="headTitle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px' }}>
                      <span style={{ fontSize: '20px' }}>Transformation zone:</span>
                      <select style={{ width: '10%', height: '40px' }}>
                        <option value="">---------------</option>
                        <option value="adequate">Adequate</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="head">
                  <div className="genDiv" style={{ backgroundColor: '#326698' }}>
                    <h2 style={{ color: '#deeaff' }}>- Normal colposcopic findings:</h2>
                  </div>
                  <div className="headBody" style={{ marginTop: '20px' }}>
                    <div className="headTitle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px' }}>
                      <span style={{ fontSize: '20px' }}>Original squamous epithelium:</span>
                      <select style={{ width: '10%', height: '40px' }}>
                        <option value="">---------------</option>
                        <option value="adequate">Adequate</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                    <div className="headTitle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px' }}>
                      <span style={{ fontSize: '20px' }}>Columnar epithelium:</span>
                      <select style={{ width: '10%', height: '40px' }}>
                        <option value="">---------------</option>
                        <option value="adequate">Adequate</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                    <div className="headTitle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px' }}>
                      <span style={{ fontSize: '20px' }}>Metaplastic squamous epithelium:</span>
                      <select style={{ width: '10%', height: '40px' }}>
                        <option value="">---------------</option>
                        <option value="adequate">Adequate</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                    <div className="headTitle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px' }}>
                      <span style={{ fontSize: '20px' }}>Deciduosis in pregnancy:</span>
                      <select style={{ width: '10%', height: '40px' }}>
                        <option value="">---------------</option>
                        <option value="adequate">Adequate</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="head">
                  <div className="genDiv" style={{ backgroundColor: '#326698' }}>
                    <h2 style={{ color: '#deeaff' }}>- Abnormal colposcopy findings:</h2>
                  </div>
                </div>
                <div className="head">
                  <div className="genDiv" style={{ backgroundColor: '#326698' }}>
                    <h2 style={{ color: '#deeaff' }}>- General principles:</h2>
                  </div>
                </div>
                <div className="head">
                  <div className="genDiv" style={{ backgroundColor: '#326698' }}>
                    <h2 style={{ color: '#deeaff' }}>- Position and size:</h2>
                  </div>
                </div>
                <div className="head">
                  <div className="genDiv" style={{ backgroundColor: '#326698' }}>
                    <h2 style={{ color: '#deeaff' }}>-General assessment:</h2>
                  </div>
                  <div className="headBody" style={{ marginTop: '20px' }}>
                    <div className="headTitle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px' }}>
                      <span style={{ fontSize: '20px' }}>Location of the lesion:</span>
                      <select style={{ width: '10%', height: '40px' }}>
                        <option value="">---------------</option>
                        <option value="adequate">Adequate</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                    <div className="headTitle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px' }}>
                      <span style={{ fontSize: '20px' }}>Location of the lesion by clock position:</span>
                      <select style={{ width: '10%', height: '40px' }}>
                        <option value="">---------------</option>
                        <option value="adequate">Adequate</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                    <div className="headTitle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px' }}>
                      <span style={{ fontSize: '20px' }}>No of quadrants:</span>
                      <select style={{ width: '10%', height: '40px' }}>
                        <option value="">---------------</option>
                        <option value="adequate">Adequate</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                    <div className="headTitle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px' }}>
                      <span style={{ fontSize: '20px' }}>% cervix:</span>
                      <select style={{ width: '10%', height: '40px' }}>
                        <option value="">---------------</option>
                        <option value="adequate">Adequate</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="head">
                  <div className="genDiv" style={{ backgroundColor: '#326698' }}>
                    <h2 style={{ color: '#deeaff' }}>- Grade 1 (minor):</h2>
                  </div>
                  <div className="headBody" style={{ marginTop: '20px' }}>
                    <div className="headTitle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px' }}>
                      <span style={{ fontSize: '20px' }}>Fine mosaic:</span>
                      <select style={{ width: '10%', height: '40px' }}>
                        <option value="">---------------</option>
                        <option value="adequate">Adequate</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                    <div className="headTitle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px' }}>
                      <span style={{ fontSize: '20px' }}>Fine punctuation:</span>
                      <select style={{ width: '10%', height: '40px' }}>
                        <option value="">---------------</option>
                        <option value="adequate">Adequate</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                    <div className="headTitle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px' }}>
                      <span style={{ fontSize: '20px' }}>Thin acetowhite epithelium:</span>
                      <select style={{ width: '10%', height: '40px' }}>
                        <option value="">---------------</option>
                        <option value="adequate">Adequate</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                    <div className="headTitle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px' }}>
                      <span style={{ fontSize: '20px' }}>Irregular, geographic border:</span>
                      <select style={{ width: '10%', height: '40px' }}>
                        <option value="">---------------</option>
                        <option value="adequate">Adequate</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="head">
                  <div className="genDiv" style={{ backgroundColor: '#326698' }}>
                    <h2 style={{ color: '#deeaff' }}>- Grade 2 (major):</h2>
                  </div>
                  <div className="headBody" style={{ marginTop: '20px' }}>
                    <div className="headTitle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px' }}>
                      <span style={{ fontSize: '20px' }}>Sharp border:</span>
                      <select style={{ width: '10%', height: '40px' }}>
                        <option value="">---------------</option>
                        <option value="adequate">Adequate</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                    <div className="headTitle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px' }}>
                      <span style={{ fontSize: '20px' }}>Inner border sign:</span>
                      <select style={{ width: '10%', height: '40px' }}>
                        <option value="">---------------</option>
                        <option value="adequate">Adequate</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                    <div className="headTitle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px' }}>
                      <span style={{ fontSize: '20px' }}>Ridge sign:</span>
                      <select style={{ width: '10%', height: '40px' }}>
                        <option value="">---------------</option>
                        <option value="adequate">Adequate</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                    <div className="headTitle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px' }}>
                      <span style={{ fontSize: '20px' }}>Inner border sign:</span>
                      <select style={{ width: '10%', height: '40px' }}>
                        <option value="">---------------</option>
                        <option value="adequate">Adequate</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                    <div className="headTitle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px' }}>
                      <span style={{ fontSize: '20px' }}>Thick acetowhite epithelium:</span>
                      <select style={{ width: '10%', height: '40px' }}>
                        <option value="">---------------</option>
                        <option value="adequate">Adequate</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                    <div className="headTitle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px' }}>
                      <span style={{ fontSize: '20px' }}>Dense acetowhite epithelium:</span>
                      <select style={{ width: '10%', height: '40px' }}>
                        <option value="">---------------</option>
                        <option value="adequate">Adequate</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                    <div className="headTitle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px' }}>
                      <span style={{ fontSize: '20px' }}>Rapid appearance:</span>
                      <select style={{ width: '10%', height: '40px' }}>
                        <option value="">---------------</option>
                        <option value="adequate">Adequate</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                    <div className="headTitle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '10px' }}>
                      <span style={{ fontSize: '20px' }}>Non-uptake of iodine:</span>
                      <select style={{ width: '10%', height: '40px' }}>
                        <option value="">---------------</option>
                        <option value="adequate">Adequate</option>
                        <option value="inadequate">Inadequate</option>
                      </select>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn" style={{ marginTop: '20px', backgroundColor: 'grey', width: '20%', height: '40px', borderRadius: '10px', color: 'white', border: 'none' }}>Submit</button>
              </div>
            </div>
          </form>
        );
      }
      

export default Table
